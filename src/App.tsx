import React, { useEffect } from 'react';
import { MainIndex } from './components';
import { useUser } from './components/store/useUsers';
import { useNavigate } from 'react-router-dom';


function App() {

	const [user, setUser] = useUser();
	const navigate = useNavigate();

	console.log(user)

	let username = user.username
	let password = user.password

	useEffect(() => {
        const isLogged = localStorage.getItem('login');
        if (isLogged === 'true') {
			const handleLogin = async () => {
				try {
					const res = await fetch('http://46.226.162.53:5678/webhook/login', {
						method: 'POST',
						headers: {
							'Content-Type': 'application/json',
						},
						body: JSON.stringify({ username, password }),
					});
		
					const data = await res.json();
					console.log(data);
		
					if (data.ok) {
						setUser({
							files: data.result.files || [],
							friends: data.result.friends || [],
							key: data.result.key || "",
							limit: data.result.limit || 0,
							name: data.result.name || "",
							usage: data.result.usage || 0,
							username: data.result.username || "",
							password: password || ""
						})
					} else {
						alert('Error');
					}
				} catch (error) {
		
				}
			};

			handleLogin()	
        }
    }, []);

	return (
		<div className="App">
			<MainIndex/>
		</div>
	);
}

export default App;


