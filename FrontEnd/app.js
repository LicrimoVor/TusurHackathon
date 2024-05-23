Vue.component('login-form', {
    template: `
        <form @submit.prevent="login">
            <h2>Вход в систему</h2>
            <input type="email" placeholder="E-mail" v-model="email" required>
            <input type="password" placeholder="Пароль" v-model="password" required>
            <button type="submit">Войти</button>
            <a href="#" class="forgot-password">Забыли пароль?</a>
            <div class="switch-link" @click="switchToRegister">Зарегистрироваться</div>
        </form>
    `,
    data() {
        return {
            email: '',
            password: ''
        };
    },
    methods: {
        login() {
            console.log('Logging in with email:', this.email); 
            // Логика авторизации
            alert('Успешная авторизация!');
            // Перенаправление
        },
        switchToRegister() {
            console.log('Switching to register page'); 
            this.$emit('switch-page', 'register');
        }
    },
    created() {
        console.log('Login form component created');
    }
});

Vue.component('register-form', {
    template: `
        <form @submit.prevent="register">
            <h2>Регистрация</h2>
            <input type="email" placeholder="E-mail" v-model="email" required>
            <input type="password" placeholder="Пароль" v-model="password" required>
            <input type="password" placeholder="Подтверждение пароля" v-model="confirmPassword" required>
            <button type="submit">Зарегистрироваться</button>
            <div class="switch-link" @click="switchToLogin">Войти</div>
        </form>
    `,
    data() {
        return {
            email: '',
            password: '',
            confirmPassword: ''
        };
    },
    methods: {
        register() {
            if (this.password !== this.confirmPassword) {
                alert('Пароли не совпадают');
                return;
            }
            console.log('Registering with email:', this.email); 
            // Логика регистрации
            alert('Успешная регистрация!');
        },
        switchToLogin() {
            console.log('Switching to login page'); 
            this.$emit('switch-page', 'login');
        }
    },
    created() {
        console.log('Register form component created'); 
    }
});

new Vue({
    el: '#app',
    data: {
        currentPage: 'login'
    },
    methods: {
        switchPage(page) {
            console.log('Switching to page:', page); 
            this.currentPage = page;
        }
    },
    created() {
        console.log('Vue instance created'); 
    }
});
