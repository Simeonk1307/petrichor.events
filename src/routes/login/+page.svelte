<script>
    import './Login.css'
    let username="";
    let password="";
    const onEnter = () => {
        console.log("Hi", username, password);
    }
</script>

<main>
    <div class="container">
        <div class="login">
            <h2><strong>Sign in to your account</strong></h2>

            <label class="label"><p>Username</p>
            	<input type="email" placeholder="name@company.com" bind:value={username} />
			</label>

            <label class="label"><p>Username</p>
            	<input type="password" placeholder="••••••••" bind:value={password} />
			</label>

            <div class="options">
                <label class="remember">
                    <div class="check"><input type="checkbox" class="checkbox" /></div>
                    Remember me
                </label>
                <a href="/" class="forgot">Forgot password?</a>
            </div>
			

            <button class="login-btn" on:click={onEnter}>Sign in</button>

            <p class="signup-text">
                Don't have an account yet? <a href="/" class="signup-link">Sign up</a>
            </p>
        </div>
    </div>
</main>
