<template>
  <section class="content">
    <div class="container-fluid">
      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <div class="card">
          <div class="header">
            <h2><strong>Basic</strong> Example</h2>
            <ul class="header-dropdown m-r--5">
              <li class="dropdown">
                <a
                  href="#"
                  onclick="return false;"
                  class="dropdown-toggle"
                  data-toggle="dropdown"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i class="material-icons">more_vert</i>
                </a>
                <ul class="dropdown-menu pull-right">
                  <li>
                    <a href="#" onclick="return false;">Action</a>
                  </li>
                  <li>
                    <a href="#" onclick="return false;">Another action</a>
                  </li>
                  <li>
                    <a href="#" onclick="return false;">Something else here</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div class="body">
            <div class="table-responsive">
              <div
                id="DataTables_Table_0_wrapper"
                class="dataTables_wrapper dt-bootstrap4"
              >
                <div class="row">
                  <div class="col-sm-12 col-md-6">
                    <div
                      class="dataTables_length"
                      id="DataTables_Table_0_length"
                    >
                      <label
                        >Show
                        <select
                          name="DataTables_Table_0_length"
                          aria-controls="DataTables_Table_0"
                          class="
                            custom-select custom-select-sm
                            form-control form-control-sm
                          "
                        >
                          <option value="10">10</option>
                          <option value="25">25</option>
                          <option value="50">50</option>
                          <option value="100">100</option>
                        </select>
                        entries</label
                      >
                    </div>
                  </div>
                  <div class="col-sm-12 col-md-6">
                    <div
                      id="DataTables_Table_0_filter"
                      class="dataTables_filter"
                    >
                      <label
                        >Search:<input
                          type="search"
                          class="form-control form-control-sm"
                          placeholder=""
                          aria-controls="DataTables_Table_0"
                      /></label>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm-12">
                    <table
                      class="
                        table table-bordered table-striped table-hover
                        js-basic-example
                        dataTable
                      "
                      id="DataTables_Table_0"
                      role="grid"
                      aria-describedby="DataTables_Table_0_info"
                    >
                      <thead>
                        <tr role="row">
                          <th
                            class="sorting_asc"
                            tabindex="0"
                            aria-controls="DataTables_Table_0"
                            rowspan="1"
                            colspan="1"
                            aria-sort="ascending"
                            aria-label="Name: activate to sort column descending"
                            style="width: 219.125px"
                          >
                            Name
                          </th>
                          <th
                            class="sorting"
                            tabindex="0"
                            aria-controls="DataTables_Table_0"
                            rowspan="1"
                            colspan="1"
                            aria-label="Position: activate to sort column ascending"
                            style="width: 350.062px"
                          >
                            Position
                          </th>
                          <th
                            class="sorting"
                            tabindex="0"
                            aria-controls="DataTables_Table_0"
                            rowspan="1"
                            colspan="1"
                            aria-label="Office: activate to sort column ascending"
                            style="width: 161.484px"
                          >
                            Office
                          </th>
                          <th
                            class="sorting"
                            tabindex="0"
                            aria-controls="DataTables_Table_0"
                            rowspan="1"
                            colspan="1"
                            aria-label="Age: activate to sort column ascending"
                            style="width: 75.75px"
                          >
                            Age
                          </th>
                          <th
                            class="sorting"
                            tabindex="0"
                            aria-controls="DataTables_Table_0"
                            rowspan="1"
                            colspan="1"
                            aria-label="Start date: activate to sort column ascending"
                            style="width: 147.469px"
                          >
                            Start date
                          </th>
                          <th
                            class="sorting"
                            tabindex="0"
                            aria-controls="DataTables_Table_0"
                            rowspan="1"
                            colspan="1"
                            aria-label="Salary: activate to sort column ascending"
                            style="width: 110.109px"
                          >
                            Salary
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr role="row" class="odd">
                          <td class="sorting_1">Airi Satou</td>
                          <td>Accountant</td>
                          <td>Tokyo</td>
                          <td>33</td>
                          <td>2008/11/28</td>
                          <td>$162,700</td>
                        </tr>
                        <tr role="row" class="even">
                          <td class="sorting_1">Angelica Ramos</td>
                          <td>Chief Executive Officer (CEO)</td>
                          <td>London</td>
                          <td>47</td>
                          <td>2009/10/09</td>
                          <td>$1,200,000</td>
                        </tr>
                        <tr role="row" class="odd">
                          <td class="sorting_1">Ashton Cox</td>
                          <td>Junior Technical Author</td>
                          <td>San Francisco</td>
                          <td>66</td>
                          <td>2009/01/12</td>
                          <td>$86,000</td>
                        </tr>
                        <tr role="row" class="even">
                          <td class="sorting_1">Bradley Greer</td>
                          <td>Software Engineer</td>
                          <td>London</td>
                          <td>41</td>
                          <td>2012/10/13</td>
                          <td>$132,000</td>
                        </tr>
                        <tr role="row" class="odd">
                          <td class="sorting_1">Brenden Wagner</td>
                          <td>Software Engineer</td>
                          <td>San Francisco</td>
                          <td>28</td>
                          <td>2011/06/07</td>
                          <td>$206,850</td>
                        </tr>
                        <tr role="row" class="even">
                          <td class="sorting_1">Brielle Williamson</td>
                          <td>Integration Specialist</td>
                          <td>New York</td>
                          <td>61</td>
                          <td>2012/12/02</td>
                          <td>$372,000</td>
                        </tr>
                        <tr role="row" class="odd">
                          <td class="sorting_1">Bruno Nash</td>
                          <td>Software Engineer</td>
                          <td>London</td>
                          <td>38</td>
                          <td>2011/05/03</td>
                          <td>$163,500</td>
                        </tr>
                        <tr role="row" class="even">
                          <td class="sorting_1">Caesar Vance</td>
                          <td>Pre-Sales Support</td>
                          <td>New York</td>
                          <td>21</td>
                          <td>2011/12/12</td>
                          <td>$106,450</td>
                        </tr>
                        <tr role="row" class="odd">
                          <td class="sorting_1">Cara Stevens</td>
                          <td>Sales Assistant</td>
                          <td>New York</td>
                          <td>46</td>
                          <td>2011/12/06</td>
                          <td>$145,600</td>
                        </tr>
                        <tr role="row" class="even">
                          <td class="sorting_1">Cedric Kelly</td>
                          <td>Senior Javascript Developer</td>
                          <td>Edinburgh</td>
                          <td>22</td>
                          <td>2012/03/29</td>
                          <td>$433,060</td>
                        </tr>
                      </tbody>
                      <tfoot>
                        <tr>
                          <th rowspan="1" colspan="1">Name</th>
                          <th rowspan="1" colspan="1">Position</th>
                          <th rowspan="1" colspan="1">Office</th>
                          <th rowspan="1" colspan="1">Age</th>
                          <th rowspan="1" colspan="1">Start date</th>
                          <th rowspan="1" colspan="1">Salary</th>
                        </tr>
                      </tfoot>
                    </table>
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm-12 col-md-5">
                    <div
                      class="dataTables_info"
                      id="DataTables_Table_0_info"
                      role="status"
                      aria-live="polite"
                    >
                      Showing 1 to 10 of 57 entries
                    </div>
                  </div>
                  <div class="col-sm-12 col-md-7">
                    <div
                      class="dataTables_paginate paging_simple_numbers"
                      id="DataTables_Table_0_paginate"
                    >
                      <ul class="pagination">
                        <li
                          class="paginate_button page-item previous disabled"
                          id="DataTables_Table_0_previous"
                        >
                          <a
                            href="#"
                            aria-controls="DataTables_Table_0"
                            data-dt-idx="0"
                            tabindex="0"
                            class="page-link"
                            >Previous</a
                          >
                        </li>
                        <li class="paginate_button page-item active">
                          <a
                            href="#"
                            aria-controls="DataTables_Table_0"
                            data-dt-idx="1"
                            tabindex="0"
                            class="page-link"
                            >1</a
                          >
                        </li>
                        <li class="paginate_button page-item">
                          <a
                            href="#"
                            aria-controls="DataTables_Table_0"
                            data-dt-idx="2"
                            tabindex="0"
                            class="page-link"
                            >2</a
                          >
                        </li>
                        <li class="paginate_button page-item">
                          <a
                            href="#"
                            aria-controls="DataTables_Table_0"
                            data-dt-idx="3"
                            tabindex="0"
                            class="page-link"
                            >3</a
                          >
                        </li>
                        <li class="paginate_button page-item">
                          <a
                            href="#"
                            aria-controls="DataTables_Table_0"
                            data-dt-idx="4"
                            tabindex="0"
                            class="page-link"
                            >4</a
                          >
                        </li>
                        <li class="paginate_button page-item">
                          <a
                            href="#"
                            aria-controls="DataTables_Table_0"
                            data-dt-idx="5"
                            tabindex="0"
                            class="page-link"
                            >5</a
                          >
                        </li>
                        <li class="paginate_button page-item">
                          <a
                            href="#"
                            aria-controls="DataTables_Table_0"
                            data-dt-idx="6"
                            tabindex="0"
                            class="page-link"
                            >6</a
                          >
                        </li>
                        <li
                          class="paginate_button page-item next"
                          id="DataTables_Table_0_next"
                        >
                          <a
                            href="#"
                            aria-controls="DataTables_Table_0"
                            data-dt-idx="7"
                            tabindex="0"
                            class="page-link"
                            >Next</a
                          >
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  layout: "dashboardLayout",
  computed: {},
  name: "MessagerieEcole",
  data() {
    return {
      searchquery: "",
    };
  },
  head: {
    title: "Messagerie - UniversCitiz",
    links: [
      {
        href: "/dashbord_assets/css/style.css",
        rel: "stylesheets",
      },
    ],
    scripts: [
      {
        src: "/dashbord_assets/js/pages/apps/chat.js",
      },
    ],
  },
};
</script>

<style lang="scss" scoped>
</style>