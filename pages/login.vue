<script setup lang="ts">
    const emailRef = ref('')
    const passwordRef = ref('')
    const nameRef = ref('')

    const handleLogin = () => {
        // Add your login logic here
        console.log(emailRef.value, passwordRef.value, nameRef.value);
    };
</script>
<template>
    <section class="flex items-center justify-center h-full bg-[#f4f5f7]">
        <div class="w-[450px] h-[600px] bg-white rounded-lg p-10 space-y-10">
            <div class="text-center space-y-4">
                <h1 class="text-5xl font-semibold">🔐 Auth</h1>
                <p class="text-slate-500">Welcome back</p>
            </div>
            <form>
                <Input placeholder="Email" type="email" class="mb-3" v-model="emailRef"/>
                <Input placeholder="Password" type="password" class="mb-3" v-model="passwordRef"/>
                <Input placeholder="Name" type="text" class="mb-3" v-model="nameRef"/>
                <Button class="bg-[#4255ff] w-full" type="button" @click="handleLogin">Login</Button>
            </form>
            <NuxtLink class="text-sm text-blue-400" to="/register">Don't have an account</NuxtLink>
        </div>
    </section>
</template>
