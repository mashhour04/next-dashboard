import React from "react";
import { Map } from "immutable";
import { connect } from "react-redux";
import {
  reduxForm,
  getFormValues,
  getFormAsyncErrors
} from "redux-form/immutable";
import { startAsyncValidation, stopAsyncValidation } from "redux-form";
import {
  FormNameContext,
  FormFieldsContext
} from "../components/Forms/Context";

export default (
  FormComponent,
  mapStateToProps,
  mapDispatchToProps,
  ...args
) => {
  const withContext = WrappedComponent =>
    function WithFormContext(props) {
      return (
        <FormNameContext.Provider value={FormComponent.formName}>
          <FormFieldsContext.Provider value={FormComponent.fields}>
            <WrappedComponent {...props} />
          </FormFieldsContext.Provider>
        </FormNameContext.Provider>
      );
    };

  const Form = connect(
    (state, props) =>
      _.assign(mapStateToProps ? mapStateToProps(state, props) : {}, {
        getValue: field => {
          const values = getFormValues(FormComponent.formName)(state);
          return field ? values && values.get(field) : values || Map();
        },
        getError: field => {
          const errors = getFormAsyncErrors(FormComponent.formName)(state);
          return field ? errors && errors.get(field) : errors || Map();
        }
      }),
    (dispatch, props) =>
      _.assign(mapDispatchToProps ? mapDispatchToProps(dispatch, props) : {}, {
        dispatch,
        updateValidation: async errors => {
          await dispatch(startAsyncValidation(FormComponent.formName));
          await dispatch(stopAsyncValidation(FormComponent.formName, errors));
        }
      }),
    ...args
  )(
    withContext(
      reduxForm({
        form: FormComponent.formName,
        destroyOnUnmount: false,
        pure: false,
        shouldAsyncValidate: ({ trigger }) =>
          _.includes(["blur", "submit"], trigger),
        onSubmit: FormComponent.onSubmit.bind(FormComponent),
        onSubmitFail: FormComponent.onSubmitFail.bind(FormComponent),
        onSubmitSuccess: FormComponent.onSubmitSuccess.bind(FormComponent),
        onChange: FormComponent.onChange.bind(FormComponent),
        asyncValidate: FormComponent.onValidate.bind(FormComponent)
      })(FormComponent)
    )
  );
  Form.formName = FormComponent.formName;
  return Form;
};