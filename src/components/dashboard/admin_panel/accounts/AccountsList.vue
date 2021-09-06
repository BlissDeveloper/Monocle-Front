<template>
  <DataTable
    :loading="isLoading"
    :paginator="true"
    :rows="10"
    paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
    class="mt-4"
    :value="users"
    :dataKey="id"
    responsiveLayout="scroll"
    v-model:selection="selectedUsers"
    :row-hover="true"
    v-model:filters="filters"
  >
    <!-- <template #header>
      <search-bar class="lg:pl-6 lg:pr-6 "></search-bar>
    </template> -->
    <template #empty>
      No users found.
    </template>
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

import { FilterMatchMode } from "primevue/api";

import apiService from "../../../../service/apiService";

export default {
  methods: {
    showToast(message) {
      this.$toast.add({ severity: "error", detail: message, life: 3000 });
    },
    async fetchAnother() {
      const response = await apiService
        .getUsers(10, this.currentQuery)
        .catch((error) => {
          this.showToast(error.response.data.message);
        });
      this.currentQuery = response.data.data.query;
      this.users.push(...response.data.data.users);
    },
  },
  data() {
    return {
      severity: "success",
      isLoading: false,
      selectedUsers: null,
      users: [],
      currentQuery: "",
      filters: {
        name: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
      },
    };
  },
  components: {
    DataTable,
    Column,
    Button,
  },
  async created() {
    this.isLoading = true;
    try {
      const response = await apiService.getUsers(10, null);
      this.currentQuery = response.data.data.query;
      this.isLoading = false;
      this.users = response.data.data.users;
      this.fetchAnother();
    } catch (error) {
      if(error.status === 401) {
        //Get another token
      }
      // this.showToast(error.response.data.message);
      this.isLoading = false;
    }
  },
};
</script>

<style scoped></style>
