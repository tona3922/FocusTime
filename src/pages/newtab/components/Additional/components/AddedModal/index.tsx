import { Button, Form, FormProps, Input, Modal } from "antd";
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
  type FieldType = {
    name: string;
    url_link: string;
  };

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    console.log("Success:", values);
    if (values.url_link.at(-1) === "/") {
      values.url_link = values.url_link.slice(0, -1);
    }
    setAddedPage((prev) => [
      ...prev,
      { name: values.name, url_link: values.url_link, isChoosen: true },
    ]);
    setIsOpen(false);
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
    setIsOpen(false);
  };

  return (
    <>
      <Modal open={isOpen} onCancel={handleCancel} footer={null}>
        <div>Modal</div>
        <Form
          name="basic"
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 18 }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item<FieldType>
            label="Username"
            name="name"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<FieldType>
            label="Url link"
            name="url_link"
            rules={[{ required: true, message: "Please input your url link!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 6, span: 24 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
      <div
        onClick={showModal}
        className="bg-white p-4 rounded hover:cursor-pointer"
      >
        Click to add modal
      </div>
    </>
  );
};

export default AddedModal;
