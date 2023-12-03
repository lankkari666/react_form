import { useState } from 'react';
import styles from './App.module.css';

const App = () => {
	const [form, setForm] = useState({
		email: '',
		password: '',
		confirmPassword: '',
	});

	const [errors, setErrors] = useState({});

	const handleChange = e => {
		setForm({
			...form,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = e => {
		e.preventDefault();
		const newErrors = validate(form);
		if (Object.keys(newErrors).length > 0) {
			setErrors(newErrors);
		} else {
			console.log(form);
		}
	};

	const validate = form => {
		let errors = {};
		if (!form.email) {
			errors.email = 'Please enter your email address';
		} else if (!/\S+@\S+\.\S+/.test(form.email)) {
			errors.email = 'Email address is invalid';
		}
		if (!form.password) {
			errors.password = 'Please enter your password';
		} else if (form.password.length < 6) {
			errors.password = 'Password must be at least 6 characters long';
		}
		if (form.password !== form.confirmPassword) {
			errors.confirmPassword = 'Passwords do not match';
		}
		return errors;
	};

	return (
		<div className={styles.App}>
			<form onSubmit={handleSubmit} className={styles.input}>
				<h1>Натив реакт</h1>
				<div>
					<label>Email:</label>
					<input
						type='email'
						name='email'
						value={form.email}
						onChange={handleChange}
					/>
					{errors.email && <p>{errors.email}</p>}
				</div>
				<div>
					<label>Пароль:</label>
					<input
						type='password'
						name='password'
						value={form.password}
						onChange={handleChange}
					/>
					{errors.password && <p>{errors.password}</p>}
				</div>
				<div>
					<label>Подтвердите пароль:</label>
					<input
						type='password'
						name='confirmPassword'
						value={form.confirmPassword}
						onChange={handleChange}
					/>
					{errors.confirmPassword && <p>{errors.confirmPassword}</p>}
				</div>
				<button
					className={styles.btn}
					type='submit'
					disabled={
						!!errors.email ||
						!!errors.password ||
						!!errors.confirmPassword
					}
				>
					Зарегистрироваться
				</button>
			</form>
		</div>
	);
};

export default App;
