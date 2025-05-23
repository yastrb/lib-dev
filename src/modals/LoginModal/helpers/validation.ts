import * as Yup from 'yup'


export const validationSchema = Yup.object({

	email: Yup.string()
		.email('Невірний формат email')
		.required('Обов\'язкове поле'),
	password: Yup.string()
		.min(6, 'Мінімум 6 символів')
		.required('Обов\'язкове поле'),

})
