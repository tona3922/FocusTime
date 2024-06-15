import { Button, Form, FormProps, Input, Modal, message } from "antd";
import React, { Dispatch, SetStateAction, useState } from "react";
import { TAddedPage } from "../../AddedPage";

const AddedModal: React.FC<{
  setAddedPage: Dispatch<SetStateAction<TAddedPage[]>>;
}> = ({ setAddedPage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const showModal = () => {
    setIsOpen(true);
  };
  const handleCancel = () => {
    setIsOpen(false);
  };
  const [messageApi, contextHolder] = message.useMessage();

  const success = () => {
    messageApi.open({
      type: "success",
      content: "Added block site successfully",
    });
  };

  const error = () => {
    messageApi.open({
      type: "error",
      content: "Error, block site can't be added successfully",
    });
  };
  type FieldType = {
    name: string;
    url_link: string;
  };

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    console.log("Success:", values);
    const urlObj = new URL(values.url_link);
    values.url_link = `${urlObj.protocol}//${urlObj.hostname}`;
    setAddedPage((prev) => [
      ...prev,
      { name: values.name, url_link: values.url_link, isChoosen: true },
    ]);
    success();
    setIsOpen(false);
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
    error();
  };

  return (
    <>
      {contextHolder}
      <Modal open={isOpen} onCancel={handleCancel} centered footer={null}>
        <div style={{ fontSize: 20, fontWeight: "bold" }}>
          Block site added form
        </div>
        <Form
          style={{ paddingTop: 12 }}
          name="basic"
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 18 }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item<FieldType>
            label="Site name"
            name="name"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<FieldType>
            label="Url(link)"
            name="url_link"
            rules={[{ required: true, message: "Please input your url link!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-end",
            }}
          >
            <Button type="primary" htmlType="submit">
              Add new block site
            </Button>
          </Form.Item>
        </Form>
      </Modal>
      <div
        onClick={showModal}
        className="bg-white hover:bg-neutral-50 shadow-inner flex flex-col gap-4 justify-center items-center h-40 w-40 rounded-lg hover:cursor-pointer"
      >
        <div className="text-lg font-customDetail font-medium">
          Add block site
        </div>
        <img
          src="https://cdn-icons-png.flaticon.com/128/3032/3032220.png"
          width={40}
          height={40}
        />
      </div>
    </>
  );
};

export default AddedModal;
