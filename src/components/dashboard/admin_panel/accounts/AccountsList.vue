<template>
  <DataTable
    :paginator="true"
    :rows="10"
    paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
    :rowsPerPageOptions="[10, 20, 50]"
    class="mt-4"
    :value="users"
    responsiveLayout="scroll"
    v-model:selection="selectedUsers"
  >
    <Column selectionMode="multiple" headerStyle="width: 3em"></Column>
    <Column field="name" header="Name"></Column>
    <Column field="email" header="Email"></Column>
    <Column field="action" header="Action">
      <template #body="">
        <Button
          icon="pi pi-trash"
          class="p-button-rounded p-button-text p-button-plain"
          style="color: red"
        />
      </template>
    </Column>
  </DataTable>
</template>

<script>
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import Button from "primevue/button";

export default {
  data() {
    return {
      selectedUsers: null,
      users: [
        { name: "Avery Martin", email: "martinaverya@gmail.com" },
        { name: "Mediatrix Gulapa", email: "mediatrix@gmail.com" },
      ],
    };
  },
  components: {
    DataTable,
    Column,
    Button,
  },
};
</script>

<style scoped></style>
