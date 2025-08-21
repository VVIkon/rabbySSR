<template>
	<div>
		<UiNavigation
			:authUser="userName"
		 />
		<slot />
	</div>
</template>

<script setup lang="ts">
const userName = ref<string>('')
const authStore= useAuthStore();
 const { user } = toRefs(authStore);
 console.log(`>>> user.value: `, user?.value);

if(user?.value) {
	userName.value = `${user.value.firstName} ${user.value.fatherName} ${user.value.lastName}`
}

</script>

<style scoped>
.layout {
	min-height: 100vh;
	display: flex;
	flex-direction: column;
}

.main-content {
	flex: 1;
	padding: 0;
}
</style>
