<template>
  <div class="mt-5 mb-6">
    <div class="bg-white m-4 shadow-2" style="border-radius: 25px">
      <div class="bg-white m-4">
        <div class="text-right">
          <Button label="Create Candidate" icon="pi pi-plus" class="p-button-info p-button-lg mt-4 mr-4"/>
          <Button label="Print" class="p-button-outlined p-button-secondary p-button-lg"/>
        </div>
      </div>
      <div class="bg-white m-4">
        <DataTable :value="candidates" responsiveLayout="scroll">
          <Column field="id" header="ID" style="width: 20%;"></Column>
          <Column field="first" header="FIRST"></Column>
          <Column field="last" header="LAST"></Column>
          <Column field="first" header="STATUS"></Column>
          <Column field="first" header="ACTION"></Column>
        </DataTable>
      </div>
    </div>
    <div class="bg-white m-4 shadow-2" style="border-radius: 25px">
      <div class="bg-white m-4">
        <div class="text-right">
          <Button label="Create Candidate" icon="pi pi-plus" class="p-button-info p-button-lg mt-4 mr-4"/>
          <Button label="Print" class="p-button-outlined p-button-secondary p-button-lg"/>
        </div>
      </div>
      <div class="bg-white m-4">
        <DataTable :value="candidates" responsiveLayout="scroll">
          <Column field="id" header="ID" style="width: 20%;"></Column>
          <Column field="first" header="FIRST"></Column>
          <Column field="last" header="LAST"></Column>
          <Column field="first" header="STATUS"></Column>
          <Column field="first" header="ACTION"></Column>
        </DataTable>
      </div>
    </div>
    <div class="bg-white m-4 shadow-2" style="border-radius: 25px">
      <div class="bg-white m-4">
        <div class="text-right">
          <Button label="Create Candidate" icon="pi pi-plus" class="p-button-info p-button-lg mt-4 mr-4"/>
          <Button label="Print" class="p-button-outlined p-button-secondary p-button-lg"/>
        </div>
      </div>
      <div class="bg-white m-4">
        <DataTable :value="candidates" responsiveLayout="scroll">
          <Column field="id" header="ID" style="width: 20%;"></Column>
          <Column field="first" header="FIRST"></Column>
          <Column field="last" header="LAST"></Column>
          <Column field="first" header="STATUS"></Column>
          <Column field="first" header="ACTION"></Column>
        </DataTable>
      </div>
    </div>
    <div class="bg-white m-4 shadow-2" style="border-radius: 25px">
      <div class="bg-white m-4">
        <div class="text-right">
          <Button label="Create Candidate" icon="pi pi-plus" class="p-button-info p-button-lg mt-4 mr-4"/>
          <Button label="Print" class="p-button-outlined p-button-secondary p-button-lg"/>
        </div>
      </div>
      <div class="bg-white m-4">
        <DataTable :value="candidates" responsiveLayout="scroll">
          <Column field="id" header="ID" style="width: 20%;"></Column>
          <Column field="first" header="FIRST"></Column>
          <Column field="last" header="LAST"></Column>
          <Column field="first" header="STATUS"></Column>
          <Column field="first" header="ACTION"></Column>
        </DataTable>
      </div>
    </div>
    <div class="bg-white m-4 shadow-2" style="border-radius: 25px">
      <div class="bg-white m-4">
        <div class="text-right">
          <Button label="Create Candidate" icon="pi pi-plus" class="p-button-info p-button-lg mt-4 mr-4"/>
          <Button label="Print" class="p-button-outlined p-button-secondary p-button-lg"/>
        </div>
      </div>
      <div class="bg-white m-4">
        <DataTable :value="candidates" responsiveLayout="scroll">
          <Column field="id" header="ID" style="width: 20%;"></Column>
          <Column field="first" header="FIRST"></Column>
          <Column field="last" header="LAST"></Column>
          <Column field="first" header="STATUS"></Column>
          <Column field="first" header="ACTION"></Column>
        </DataTable>
      </div>
    </div>
    <div class="bg-white m-4 shadow-2" style="border-radius: 25px">
      <div class="bg-white m-4">
        <div class="text-right">
          <Button label="Create Candidate" icon="pi pi-plus" class="p-button-info p-button-lg mt-4 mr-4"/>
          <Button label="Print" class="p-button-outlined p-button-secondary p-button-lg"/>
        </div>
      </div>
      <div class="bg-white m-4">
        <DataTable :value="candidates" responsiveLayout="scroll">
          <Column field="id" header="ID" style="width: 20%;"></Column>
          <Column field="first" header="FIRST"></Column>
          <Column field="last" header="LAST"></Column>
          <Column field="first" header="STATUS"></Column>
          <Column field="first" header="ACTION"></Column>
        </DataTable>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Dashboard",
  data() {
    return {
      candidates: [
        {id: "54e88841-ea0a-444e-8daf-9f26e529405a", first: "Adam", last: "Hidayatullah"},
        {id: "54e88841-ea0a-444e-8daf-9f26e529405b", first: "Raycall", last: "Arditama"},
      ]
    }
  }
}
</script>

<style scoped>

</style>
