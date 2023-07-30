import { useState } from "react";

export default function SignUpForm({ setToken }) {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  async function handleSubmit(event) {
    event.preventDefault();

    try {
         const response = await fetch("https://fsa-jwt-practice.herokuapp.com/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }), // Send username and password in the request body
      });
        const result = await response.json();
        console.log(result);
        setToken(result.token);
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <><div>
      <h2>Sign Up!</h2>
      <form onSubmit={handleSubmit}> 
        <label>
          Username: <input value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <label>
          Password: <input value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div></>
  );
}