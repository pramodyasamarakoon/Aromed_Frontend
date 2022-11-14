import * as yup from 'yup';

export const landingPageValidation = yup.object().shape({
    appointmentID: yup.number().required()
});