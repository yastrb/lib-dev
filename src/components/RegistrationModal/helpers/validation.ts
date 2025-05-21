import * as Yup from 'yup'


export const validationSchema = Yup.object({
	name: Yup.string()
		.min(2, 'Ім\'я повинно містити мінімум 2 символи')
		.required('Обов\'язкове поле'),
	email: Yup.string()
		.email('Невірний формат email')
		.required('Обов\'язкове поле'),
	phone: Yup.string()
		.matches(/^\+?[0-9]{10,12}$/, 'Невірний формат телефону')
		.required('Обов\'язкове поле'),
	password: Yup.string()
		.min(6, 'Мінімум 6 символів')
		.required('Обов\'язкове поле'),
	agreement: Yup.boolean()
		.oneOf([true], 'Ви повинні погодитись з умовами')
})
