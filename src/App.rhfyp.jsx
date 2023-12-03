import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import styles from './App.rhfyp.module.css';

const schema = yup.object().shape({
	email: yup
		.string()
		.email('Введите корректный адрес электронной почты')
		.required('Введите адрес электронной почты'),
	password: yup
		.string()
		.min(8, 'Пароль должен содержать минимум 8 символов')
		.required('Введите пароль'),
	confirmPassword: yup
		.string()
		.oneOf([yup.ref('password'), null], 'Пароли должны совпадать')
		.required('Введите пароль повторно'),
});

const AppRhfyp = () => {
	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
	} = useForm({
		defaultValues: {
			email: '',
			password: '',
			confirmPassword: '',
		},
		resolver: yupResolver(schema),
	});
	const emailError = errors.email?.message;
	const passwordError = errors.password?.message;
	const confirmPasswordError = errors.confirmPassword?.message;

	const onSubmit = data => {
		console.log('Form data submitted:', data);
	};

	return (
		<>
			<div className={styles.AppRhfyp}>
				<form
					className={styles.input}
					onSubmit={handleSubmit(onSubmit)}
				>
					<h1>React hook form + yup</h1>
					<div>
						<label>Email:</label>
						<input name='email' {...register('email')} />
						{emailError && <p>{emailError}</p>}
					</div>

					<div>
						<label>Пароль:</label>
						<input
							name='password'
							type='password'
							{...register('password')}
						/>
						{passwordError && <p>{passwordError}</p>}
					</div>

					<div>
						<label>Подтвердите пароль:</label>
						<input
							name='confirmPassword'
							type='password'
							{...register('confirmPassword')}
						/>
						{confirmPasswordError && <p>{confirmPasswordError}</p>}
					</div>

					<button
						className={styles.btn}
						type='submit'
						disabled={!isValid}
						tabIndex={0}
					>
						Зарегистрироваться
					</button>
				</form>
			</div>
		</>
	);
};
export default AppRhfyp;
