import EleTableList from '@/components/ele-table-list/ele-table-list';
import BasePage from '@/components/layout/base-page';
import type { EleValueType } from '@/components/value-type';
import CommonColumn from '@/components/value-type/common-column';
import ApiConfig from '@/http/api-config';
import { CaretRightOutlined } from '@ant-design/icons';
import type { ActionList } from '@/utils/nice-router-types';
import type { ProColumnType } from '@ant-design/pro-components';

const columns: ProColumnType<any, EleValueType>[] = [
  {
    title: '任务编号',
    dataIndex: 'id',
    align: 'center',
    hideInForm: true,
  },
  {
    title: '任务名称',
    dataIndex: 'schedulerName',
    ellipsis: true,
    align: 'center',
  },
  {
    title: '任务组名',
    dataIndex: 'schedulerGroup',
    align: 'center',
  },
  {
    title: '调用目标字符串',
    dataIndex: 'invokeTarget',
    ellipsis: true,
    align: 'center',
  },
  {
    title: 'cron执行表达式',
    dataIndex: 'cronExpression',
    ellipsis: true,
    align: 'center',
  },
  CommonColumn.status,
  {
    title: '备注',
    dataIndex: 'remark',
    ellipsis: true,
  },
];

export default () => {
  const handleRun = (record) => {
    console.log('kickoff', record);
  };
  const lineActions: ActionList = [
    {
      code: 'runOnce',
      title: (
        <div>
          <CaretRightOutlined />
          执行一下
        </div>
      ),
      onClick: handleRun,
      type: 'warning',
    },
    { code: 'edit' },
  ];
  return (
    <BasePage>
      <EleTableList
        lineActionList={lineActions}
        resource={ApiConfig.scheduler}
        title="在线用户"
        columns={columns}
        search={false}
        formProps={{ columns }}
      />
    </BasePage>
  );
};
