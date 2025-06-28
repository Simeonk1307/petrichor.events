<script>
    import './ChangePassword.css'
    let oldpassword="";
    let newpassword="";
    const onEnter = () => {
        console.log("Hi", oldpassword, newpassword);
    }
</script>

<main>
    <div class="container">
        <div class="login">
            <h2><strong>Change Password</strong></h2>

            <label class="label"><p>Old Password</p>
            	<input type="email" placeholder="••••••••" bind:value={oldpassword} />
			</label>

            <label class="label"><p>New Password</p>
            	<input type="password" placeholder="••••••••" bind:value={newpassword} />
			</label>
			
            <button class="login-btn" on:click={onEnter}>Reset Password</button>
        </div>
    </div>
</main>
