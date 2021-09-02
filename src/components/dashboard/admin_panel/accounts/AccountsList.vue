<template>
  <DataTable
    :loading="isLoading"
    :paginator="true"
    :rows="10"
    paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
    class="mt-4"
    :value="users"
    responsiveLayout="scroll"
    v-model:selection="selectedUsers"
  >
    <Column selectionMode="multiple" headerStyle="width: 3em"></Column>
    <Column field="id" header="ID"></Column>
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

import apiService from "../../../../service/apiService";

export default {
  methods: {
    showToast(message) {
      this.$vaToast.init({
        message: message,
        position: "bottom-right",
        color: this.severity,
      });
    },
  },
  data() {
    return {
      severity: "success",
      isLoading: false,
      selectedUsers: null,
      users: null,
    };
  },
  components: {
    DataTable,
    Column,
    Button,
  },
  async created() {
    this.isLoading = true;
    const response = await apiService.getUsers().catch((error) => {
      this.showToast(error.response.data.message);
    });
    this.isLoading = false;
    this.users = response.data.data.users;
    console.log(JSON.stringify(this.users));
  },
};
</script>

<style scoped></style>
