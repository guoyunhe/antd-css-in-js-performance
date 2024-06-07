import { Input } from "antd";
import { DatePicker } from "antd";
import { Checkbox } from "antd";
import { Tabs } from "antd";
import { Form, Select, Button, Table } from "antd";

function App() {
  return (
    <div>
      <Form>
        <Form.Item>
          <Input/>
        </Form.Item>
        <Form.Item>
          <Checkbox/>
        </Form.Item>
        <Form.Item>
          <DatePicker/>
        </Form.Item>
        <Form.Item>
          <Select />
        </Form.Item>
        <Button type="primary">Button</Button>
      </Form>
      <Table/>
      <Tabs/>
    </div>
  );
}

export default App;
