<template>
    <div>
    <section class="content">
      <div class="row justify-content-around">
        <div class="col-8">
          <div class="card">
            <div class="card-header">
              <h3 class="card-title">Category List</h3>
                <div class="card-tools">
                    <button class="btn btn-primary">
                        <router-link to="/add-category" style="#fff"> Add Category </router-link>
                    </button> 
              
                 </div>
            </div>
            
            <!-- /.card-header -->
            <div class="card-body">
              <table id="example2" class="table table-bordered table-hover">
                <thead>
                <tr>
                  <th>SL</th>
                  <th>Name</th>
                  <th>Date</th>
                  <th>Action</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(category, index) in getallCategory" :key="index">
                  <td>{{ index+1 }}</td>
                  <td>
                    {{ category.cat_name }}
                  </td>
                  <td>{{ category.created_at |timeformat }}</td>
                  
                  
                  <td>
                      <a href="">Edit</a>
                      <a href="" @click.prevent="deletecategory(category.id)">Delete</a>
                  </td>
                </tr>
                
                
                </tbody>
               
              </table>
            </div>
            <!-- /.card-body -->
          </div>
          <!-- /.card -->

      
        </div>
        <!-- /.col -->
      </div>
      <!-- /.row -->
    </section>
    </div>
</template>

<script>
export default {
    name: "list",
    mounted(){
      return this.$store.dispatch("allCategory")
    },
    computed:{
      getallCategory(){
       return this.$store.getters.getCategory
      }
    },
    methods:{
      deletecategory(id){
        console.log(id)
      }
    }

}
</script>

<style scoped>

</style>
