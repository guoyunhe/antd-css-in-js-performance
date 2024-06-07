import { Tabs } from "antd";
import { Form, Select, Button, Table } from "antd";

function App() {
  return (
    <div>
      <Form>
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
