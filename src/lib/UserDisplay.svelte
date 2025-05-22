<script>
    let { user } = $props();
</script>

<div>
    <img src={user.img} alt="userImage">
    <p>{user.userName}</p>
</div>