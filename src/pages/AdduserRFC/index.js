import "./index.less";
import { Button, Modal, message, Form, Input, InputNumber, Table } from "antd";
import zhCN from "antd/locale/zh_CN";
import React, { useState } from "react";

// 用户
const useUser = () => {
  // 用户信息
  const [userList, setUserList] = useState([]);
  // 弹框
  const [showModa, setShowModa] = useState(false);
  // 成功提示
  const [messageApi, contextHolder] = message.useMessage();
  // 表单实例
  const [form] = Form.useForm();
  // 点击按钮 弹框
  const addButtonClick = () => {
    setShowModa(true);
  };
  // 提交成功
  const success = () => {
    messageApi.open({
      type: "success",
      content: "添加成功！",
    });
  };
  //   点击确认输入
  const addUser = async () => {
    const res = await form.validateFields();
    if (res) {
      console.log({ res });
      console.log("校验通过");
      success();

      const list = [...userList];
      res["key"] = Date.now();
      list.push(res);
      list.map((item, index) => {
        item.key = Date.now() + index;
      });
      console.log(list);
      setTimeout(() => {
        setUserList(list);
      }, 0);
    }
  };

  //   取消弹窗
  const handleCancel = () => {
    form.resetFields();
    setShowModa(false);
  };
  //   用户弹窗渲染
  const renderModa = () => {
    return (
      <>
        {contextHolder}
        <Button type="primary" onClick={addButtonClick}>
          添加用户
        </Button>
        <Modal
          title="添加用户"
          open={showModa}
          onOk={addUser}
          onCancel={handleCancel}
        >
          <Form
            form={form}
            name="basic"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
            initialValues={{
              remember: true,
            }}
            autoComplete="off"
          >
            <Form.Item
              label="用户名称"
              name="username"
              rules={[
                {
                  required: true,
                  message: "请输入用户名称",
                },
                {
                  max: 10,
                  message: "不超过10个字符",
                },
                {
                  min: 2,
                  message: "不少于2个字符",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="年龄"
              name="userage"
              rules={[
                {
                  required: true,
                  message: "请输入用户年龄",
                },
                {
                  validator: (rule, value, callback) => {
                    if (value > 80) {
                      callback(`不能大于80`);
                    } else if (value < 10) {
                      callback(`不能小于10`);
                    } else {
                      return Promise.resolve();
                    }
                  },
                },
              ]}
            >
              <InputNumber />
            </Form.Item>

            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            ></Form.Item>
          </Form>
        </Modal>
      </>
    );
  };
  return { renderModa, addUser, addButtonClick, userList };
};

// 表格组件
const UserTable = (props) => {
  const { userList } = props;

  const columns = [
    {
      title: "名称",
      dataIndex: "username",
      key: "username",
    },
    {
      title: "年龄",
      dataIndex: "userage",
      key: "userage",
    },
  ];
  // 渲染表格

  return (
    <div style={{ width: "600px", height: "600px" }}>
      <Table columns={columns} dataSource={userList} />
    </div>
  );
};

// 主函数
const AdduserRFC = () => {
  const { renderModa, userList } = useUser();

  return (
    <div className="home-page">
      <>{renderModa()}</>
      <>
        <UserTable userList={userList}></UserTable>
      </>
    </div>
  );
};

export default AdduserRFC;
