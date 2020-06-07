<template>
  <div class="app-container">
    <div class="search-box">
      <div style="display:inline-block ;">
        <label style="font-family:verdana;font-size:80%;margin-right:10px">时间范围：</label>
        <el-date-picker
          v-model="dateTimeRange"
          :default-time="['12:00:00','12:00:00']"
          type="datetimerange"
          :picker-options="pickerOptions"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          align="right"
        />
      </div>
      <div style="display:inline-block ;">
        <el-input v-model="search" placeholder="请输入内容" class="input-with-select">
          <el-select slot="prepend" v-model="select" placeholder="请选择">
            <el-option label="用户ID" value="user_id" />
            <el-option label="用户名" value="user_name" />
            <el-option label="班级" value="user_class" />
          </el-select>
          <el-button slot="append" type="primary" icon="el-icon-search" @click="SearchList(dateTimeRange,search,select)" />
        </el-input>
      </div>
    </div>
    <el-divider />
    <el-table
      v-loading="listLoading"
      :data="searchList.slice((currentPage-1)*pageSize,currentPage*pageSize)"
      :row-class-name="tableRowClassName"
      :default-sort="{prop: 'user_id', order: 'descending'}"
      element-loading-text="Loading"
      border
      fit
      highlight-current-row
    >
      <el-table-column align="center" label="ID" width="80">
        <template slot-scope="scope">{{ scope.$index+1 }}</template>
      </el-table-column>
      <el-table-column label="用户ID" width="200" align="center" :sortable="true" prop="user_id">
        <template slot-scope="scope">{{ scope.row.user_id }}</template>
      </el-table-column>
      <el-table-column label="用户名" align="center" width="240" :sortable="true" prop="user_name">
        <template slot-scope="scope">
          <span>{{ scope.row.user_name }}</span>
        </template>
      </el-table-column>
      <el-table-column label="学院" align="center">
        <template slot-scope="scope">{{ scope.row.user_major }}</template>
      </el-table-column>
      <el-table-column label="班级" align="center">
        <template slot-scope="scope">{{ scope.row.user_class }}</template>
      </el-table-column>
      <el-table-column label="积分" align="center">
        <template slot-scope="scope">{{ scope.row.score }}</template>
      </el-table-column>
      <el-table-column label="操作" width="220" align="center">
        <template slot-scope="scope">
          <el-drawer
            ref="drawer"
            :visible.sync="showDrawer"
            :before-close="handleClose"
            custom-class="demo-drawer"
          >
            <div class="demo-drawer__content">
              <el-form :model="form">
                <el-form-item label="用户ID" :label-width="formLabelWidth">
                  <el-input
                    v-model="form.user_id"
                    type="input"
                    :autosize="{ minRows: 1, maxRows: 2}"
                  />
                </el-form-item>
                <el-form-item label="管理员ID" :label-width="formLabelWidth">
                  <el-input
                    v-model="form.admin_id"
                    type="input"
                    :autosize="{ minRows: 1, maxRows: 2}"
                  />
                </el-form-item>
                <el-form-item label="用户名" :label-width="formLabelWidth" style="text-align:left">
                  <el-input v-model="form.user_name" />
                </el-form-item>
                <el-form-item label="用户密码" :label-width="formLabelWidth" style="text-align:left">
                  <el-input v-model="form.user_password" />
                </el-form-item>
                <el-form-item label="学院" :label-width="formLabelWidth" style="text-align:left">
                  <el-input v-model="form.user_major" />
                </el-form-item>
                <el-form-item label="班级" :label-width="formLabelWidth" style="text-align:left">
                  <el-input v-model="form.user_class" />
                </el-form-item>
                <el-form-item label="个人积分" :label-width="formLabelWidth" style="text-align:left">
                  <el-input v-model="form.score" />
                </el-form-item>
              </el-form>
              <div class="demo-drawer__footer">
                <el-button @click="cancelForm">取 消</el-button>
                <el-button
                  type="primary"
                  :loading="loading"
                  @click="$refs.drawer.closeDrawer()"
                >{{ loading ? '提交中 ...' : '确 定' }}</el-button>
              </div>
            </div>
          </el-drawer>
          <transition name="el-zoom-in-center">
            <el-button type="primary" size="mini" @click="selectContent(scope.row)">查看</el-button>
          </transition>
          <span>
            <el-tooltip class="item" effect="dark" content="删除这一申请表" placement="top">
              <transition name="el-zoom-in-center">
                <el-button size="mini" type="danger" @click="dialogVisible = true;form=scope.row ">删除</el-button>
              </transition>
            </el-tooltip>
          </span>
          <el-dialog
            title="提示"
            :visible.sync="dialogVisible"
            width="30%"
          >
            <span>确认永久删除该申请表吗？</span>
            <span slot="footer" class="dialog-footer">
              <el-button @click="dialogVisible = false">取 消</el-button>
              <el-button type="primary" @click="handleDelete(form)">确 定</el-button>
            </span>
          </el-dialog>
        </template>
      </el-table-column>
    </el-table>

    <div class="paginationClass">
      <el-pagination
        background
        :hide-on-single-page="true"
        :current-page="currentPage"
        :page-sizes="[10, 20, 50, 100]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
  </div>
</template>

<script>
import { StudentUpdate, StudentDelete, getStudentList } from '@/api/table'

export default {
  data() {
    return {
      dateTimeRange: [],
      beginDate: '',
      endDate: '',
      search: '',
      select: '',
      dialogVisible: false,
      list: null,
      searchList: null,
      listLoading: true,
      total: 0,
      currentPage: 1,
      pageSize: 10,
      showDrawer: false,
      loading: false,
      form: {
        user_id: '',
        admin_id: '',
        user_name: '',
        user_password: '',
        user_major: '',
        user_class: '',
        score: ''
      },
      formLabelWidth: '80px',
      timer: null,
      pickerOptions: {
        shortcuts: [
          {
            text: '最近一天',
            onClick(picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 1)
              picker.$emit('pick', [start, end])
            }
          },
          {
            text: '最近一周',
            onClick(picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
              picker.$emit('pick', [start, end])
            }
          },
          {
            text: '最近一个月',
            onClick(picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
              picker.$emit('pick', [start, end])
            }
          },
          {
            text: '最近三个月',
            onClick(picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
              picker.$emit('pick', [start, end])
            }
          }
        ]
      }
    }
  },
  watch: {
    'dateTimeRange': function(dateTimeRange) {
      this.searchList = this.searchList.filter(function(item) {
        if (dateTimeRange) {
          if (item[2] >= dateTimeRange[0].toLocaleString() && item[2] <= dateTimeRange[1].toLocaleString()) {
            console.log(dateTimeRange[0].toLocaleString())
            return true
          } else {
            return false
          }
        } else { return false }
      })
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.listLoading = true
      getStudentList().then(response => {
        this.list = response.data.items
        this.searchList = response.data.items
        this.total = response.data.total
        this.listLoading = false
      })

      this.currentChangePage(this.list, this.currentPage)
    },
    handleSizeChange(pageSize) {
      // 每页条数切换
      this.pageSize = pageSize
    },
    handleCurrentChange(currentPage) {
      // 页码切换
      this.currentPage = currentPage
    },
    selectContent(row) {
      this.showDrawer = true
      this.form = row
    },
    handleDelete(row) {
      this.dialogVisible = false
      StudentDelete(row).then(response => {
        getStudentList().then(response => {
          this.list = response.data.items
          this.total = response.data.total
        })
      })
    },
    handleClose() {
      if (this.loading) {
        return
      }
      this.$confirm('确定要提交表单吗？')
        .then(_ => {
          this.loading = true
          this.timer = setTimeout(() => {
            StudentUpdate(this.form).then(response => {
              getStudentList().then(response => {
                this.list = response.data.items
                this.total = response.data.total
              })
            })
            // 动画关闭需要一定的时间
            setTimeout(() => {
              this.loading = false
            }, 400)
          }, 2000)
        })
        .catch(_ => {})
    },
    cancelForm() {
      this.loading = false
      this.showDrawer = false
      clearTimeout(this.timer)
    },
    SearchList(dateTimeRange, search, select) {
      this.searchList = this.searchList.filter(function(item) {
        return Object.keys(item).some(function(key) {
          return String(item[select]).toLowerCase().indexOf(search) > -1
        })
      })
    }

  }
}
</script>
<style>
.el-select .el-input {
  width: 130px;
}
.input-with-select .el-input-group__prepend {
  background-color: #fff;
}
.search-box {
  display: flex;
  justify-content: space-evenly;
}
.paginationClass .el-pagination {
  text-align: right;
}
.line {
  display: flex;
  align-items: center;
}
.el-table .warning-row {
  background: oldlace;
}

.el-table .success-row {
  background: #f0f9eb;
}
</style>
