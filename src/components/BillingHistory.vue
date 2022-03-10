<template>
  <div class="card billing-card">
    <CardHeader
      title="Billing History"
      description="Choose a billing plan to see more details"
    />
    <div class="billing-table">
      <a-table :columns="columns" :data-source="data" :pagination="pagination">
        <template #type>
          <a>{{ text }}</a>
        </template>
      </a-table>
    </div>
  </div>
</template>

<script>
import CardHeader from "./CardHeader.vue";
import History from "./History.json";
import { DownloadOutlined } from "@ant-design/icons-vue";

const columns = [
  {
    title: "Date",
    dataIndex: "date",
    key: "date",
  },
  {
    title: "Type",
    dataIndex: "type",
    key: "type",
    customRender: ({ text }) => {
      return <span class="type">{text}</span>;
    },
  },
  {
    title: "Amount",
    dataIndex: "amount",
    key: "amount",
  },
  {
    title: "Balance",
    dataIndex: "balance",
    key: "balance",
  },
  {
    title: "Reference",
    dataIndex: "reference",
    key: "reference",
  },
  {
    title: "Download",
    dataIndex: "download",
    key: "download",
    customRender: () => {
      return (
        <span class="download-icon">
          <DownloadOutlined />
        </span>
      );
    },
  },
];

const data = History;

export default {
  name: "BillingHistory",
  components: {
    CardHeader,
    // eslint-disable-next-line vue/no-unused-components
    DownloadOutlined,
  },
  data() {
    return {
      data,
      columns,
      pagination: {
        pageSize: 5,
        itemRender({ type, originalElement }) {
          if (type === "prev") {
            return <a>Previous</a>;
          } else if (type === "next") {
            return <a>Next</a>;
          }

          return originalElement;
        },
      },
    };
  },
};
</script>

<style lang="scss">
.billing-card {
  width: 100%;

  .card-header {
    margin-bottom: 0;
  }

  .billing-table {
    padding-bottom: 15px;

    table {
      tr {
        > th {
          background: #fff;
          font-weight: 600;
          border-bottom: 0.15em solid var(--borderColor);
        }

        > td {
          border-bottom: 1px solid #e0dfdf;
          font-weight: 500;

          .type {
            font-size: 13px;
            border: 1px solid #ddd;
            border-radius: 4px;
            padding: 2px 8px;
            background-color: #fff;
          }

          .download-icon {
            cursor: pointer;

            svg {
              width: 23px;
              height: auto;
              fill: var(--blue);
            }
          }
        }
      }
    }

    .ant-table-pagination.ant-pagination {
      text-align: center;
      float: none;
    }

    .ant-pagination-item {
      border-radius: 10px;
      border-color: transparent;

      &:hover {
        border: 1px solid #ededed;
        background-color: #f0f0f0;
      }

      a {
        color: #808080;
      }
    }

    .ant-pagination-item-active,
    .ant-pagination-item-active:hover {
      background: var(--blue);
      border-color: var(--blue);

      a,
      a:hover {
        color: #fff;
      }
    }

    .ant-pagination-prev,
    .ant-pagination-next {
      a {
        color: var(--blue);
        font-size: 13px;
        font-weight: 600;
      }

      &.ant-pagination-disabled a {
        color: rgba(0, 0, 0, 0.25);
      }
    }

    .ant-pagination-prev {
      margin-right: 40px;
    }

    .ant-pagination-next {
      margin-left: 40px;
    }
  }
}
</style>
