<script>
  let { data } = $props();
  const employeeList = data.employees.data;
  console.log(employeeList);
</script>

{#each employeeList as person}

<!--could probably better make this a component-->
  <div class="person">
    <h2>{person.first_name + " " + person.last_name}</h2>
    <img src={person.avatar} alt={person.first_name} />
    <p>{person.email}</p>
  </div>
{/each}

<style>
    .person {
        border: 1px solid grey;
        max-width: 300px;
        padding: 1em;
        margin: 1em;
    }

    h2 {
        margin-top: 0;
    }

</style>
