import React, { Component } from "react";
import Layout from "../components/Layout";
import { post } from "axios";
import { Input, Form, Button, Table, Dropdown, Message} from "semantic-ui-react";

let opt;

const gdsVol = [
  {
    key: "ss",
    text: "극소",
    value: "1"
  },
  {
    key: "sm",
    text: "소",
    value: "2"
  },
  {
    key: "mid",
    text: "중",
    value: "3"
  },
  {
    key: "big",
    text: "대",
    value: "4"
  }
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sender_name: "",
      sender_p1: "",
      sender_p2: "",
      sender_p3: "",
      sender_email: "",
      receiver_name: "",
      receiver_p1: "",
      receiver_p2: "",
      receiver_p3: "",
      product_name: "",
      product_price: "",
      quantity: "",
      volume: "",
      others: "",
      password: "",

      Spost: "",
      Saddr1: "",
      Saddr2: "",
      Rpost: "",
      Raddr1: "",
      Raddr2: "",
      errorMessage: "",
      loading: false,
      success: false
    };
  }

  start = () => {
    setTimeout(this.print,45000);
  }

  print = () => {
    alert("접수 되었습니다.");
    return this.props.history.push(window.location.pathname.replace("/addMail",""));
  }

  senderJusoPopup = () => {
    opt = 0;
    window.open("../../juso", "주소창", "width=508, height=453, location = no");
  };

  receiverJusoPopup = () => {
    opt = 1;
    window.open("../../juso", "주소창", "width=508, height=453, location = no");
  };

  handleFormSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    this.start();
    this.addmail();
    //window.location.reload();
  };

  handleValueChange = e => {
    let nextState = {};
    nextState[e.target.id] = e.target.value;
    this.setState(nextState);
  };

  dropChange = (e, { id, value }) => {
    this.setState({ [id]: value });
  };

  getmail = () => {
    const url = "/api/getmail";
    const formData = new FormData();
    formData.append("address", this.props.match.params.address);
    const config = {
      headers: {
        "content-type": "multipart/form-data"
      }
    };
    return post(url,formData,config);
  };




  addmail = async () => {
    this.setState({ loading: true });
      const url = "/api/addmail";
      const formData = new FormData();
      formData.append("sender_name", this.state.sender_name);
      formData.append("sender_p1", this.state.sender_p1);
      formData.append("sender_p2", this.state.sender_p2);
      formData.append("sender_p3", this.state.sender_p3);
      formData.append("sender_email", this.state.sender_email);
      formData.append("Spost", this.state.Spost);
      formData.append("Saddr1", this.state.Saddr1);
      formData.append("Saddr2", this.state.Saddr2);

      formData.append("receiver_name", this.state.receiver_name);
      formData.append("receiver_p1", this.state.receiver_p1);
      formData.append("receiver_p2", this.state.receiver_p2);
      formData.append("receiver_p3", this.state.receiver_p3);
      formData.append("Rpost", this.state.Rpost);
      formData.append("Raddr1", this.state.Raddr1);
      formData.append("Raddr2", this.state.Raddr2);

      formData.append("product_name", this.state.product_name);
      formData.append("product_price", this.state.product_price);
      formData.append("quantity", this.state.quantity);
      formData.append("volume", this.state.volume);
      formData.append("others", this.state.others);
      formData.append("password", this.state.password);

      formData.append("address", this.props.match.params.address);
      const config = {
        headers: {
          "content-type": "multipart/form-data"
        }
      };
      await post(url, formData, config);




  };

  testF = data => {
    if (opt === 0) {
      this.setState({
        Spost: data.zonecode,
        Saddr1: data.address
      });
    } else {
      this.setState({
        Rpost: data.zonecode,
        Raddr1: data.address
      });
    }
  };

  testB = () => {
    this.props.history.goBack();
  };

  render() {
    window.testF = this.testF;

    return (
      <Layout>
        <Button basic onClick={this.testB} color="purple">
          뒤로 가기(임시)
        </Button>

        <Table singleLine>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell colSpan="2">보내는 분</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.Cell>
                <Form error={this.state.errorMessage}>
                  <Form.Field inline>
                    <label style={{ minWidth: "6em" }}>이름</label>
                    <Input
                      id="sender_name"
                      style={{ minWidth: "30em" }}
                      value={this.state.sender_name}
                      onChange={this.handleValueChange}
                    />
                  </Form.Field>
                  <Form.Group inline>
                    <Form.Field>
                      <label style={{ minWidth: "6em" }}>연락처</label>
                      <Input
                        id="sender_p1"
                        style={{ maxWidth: "5em" }}
                        value={this.state.sender_p1}
                        onChange={this.handleValueChange}
                      />
                    </Form.Field>
                    <Form.Field>
                      <label>-</label>
                      <Input
                        id="sender_p2"
                        style={{ maxWidth: "5em" }}
                        value={this.state.sender_p2}
                        onChange={this.handleValueChange}
                      />
                    </Form.Field>
                    <Form.Field>
                      <label>-</label>
                      <Input
                        id="sender_p3"
                        style={{ maxWidth: "5em" }}
                        value={this.state.sender_p3}
                        onChange={this.handleValueChange}
                      />
                    </Form.Field>
                  </Form.Group>
                  <Form.Field inline>
                    <label style={{ minWidth: "6em" }}>이메일</label>
                    <Input
                      id="sender_email"
                      style={{ minWidth: "30em" }}
                      value={this.state.sender_email}
                      onChange={this.handleValueChange}
                    />
                  </Form.Field>
                </Form>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <Form>
                  <Form.Group inline>
                    <Form.Field>
                      <label style={{ minWidth: "6em" }}>주소</label>
                      <Input
                        id="Spost"
                        value={this.state.Spost}
                        style={{ maxWidth: "8em" }}
                        onChange={this.handleValueChange}
                      />
                    </Form.Field>
                    <Button onClick={this.senderJusoPopup}>Submit</Button>
                  </Form.Group>
                  <Form.Field inline>
                    <label style={{ minWidth: "6em" }}></label>
                    <Input
                      id="Saddr1"
                      value={this.state.Saddr1}
                      onChange={this.handleValueChange}
                      style={{ minWidth: "30em" }}
                    />
                  </Form.Field>
                  <Form.Field inline>
                    <label style={{ minWidth: "6em" }}></label>
                    <Input
                      id="Saddr2"
                      style={{ minWidth: "30em" }}
                      value={this.state.Saddr2}
                      onChange={this.handleValueChange}
                    />
                  </Form.Field>
                </Form>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell colSpan="2">받는 분</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.Cell>
                <Form>
                  <Form.Field inline>
                    <label style={{ minWidth: "6em" }}>이름</label>
                    <Input
                      id="receiver_name"
                      style={{ minWidth: "30em" }}
                      value={this.state.receiver_name}
                      onChange={this.handleValueChange}
                    />
                  </Form.Field>
                  <Form.Group inline>
                    <Form.Field>
                      <label style={{ minWidth: "6em" }}>연락처</label>
                      <Input
                        id="receiver_p1"
                        style={{ maxWidth: "5em" }}
                        value={this.state.receiver_p1}
                        onChange={this.handleValueChange}
                      />
                    </Form.Field>
                    <Form.Field>
                      <label>-</label>
                      <Input
                        id="receiver_p2"
                        style={{ maxWidth: "5em" }}
                        value={this.state.receiver_p2}
                        onChange={this.handleValueChange}
                      />
                    </Form.Field>
                    <Form.Field>
                      <label>-</label>
                      <Input
                        id="receiver_p3"
                        style={{ maxWidth: "5em" }}
                        value={this.state.receiver_p3}
                        onChange={this.handleValueChange}
                      />
                    </Form.Field>
                  </Form.Group>
                </Form>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <Form>
                  <Form.Group inline>
                    <Form.Field>
                      <label style={{ minWidth: "6em" }}>주소</label>
                      <Input
                        id="Rpost"
                        value={this.state.Rpost}
                        onChange={this.handleValueChange}
                        style={{ maxWidth: "8em" }}
                      />
                    </Form.Field>
                    <Button onClick={this.receiverJusoPopup}>Submit</Button>
                  </Form.Group>
                  <Form.Field inline>
                    <label style={{ minWidth: "6em" }}></label>
                    <Input
                      id="Raddr1"
                      value={this.state.Raddr1}
                      onChange={this.handleValueChange}
                      style={{ minWidth: "30em" }}
                    />
                  </Form.Field>
                  <Form.Field inline>
                    <label style={{ minWidth: "6em" }}></label>
                    <Input
                      id="Raddr2"
                      style={{ minWidth: "30em" }}
                      value={this.state.Raddr2}
                      onChange={this.handleValueChange}
                    />
                  </Form.Field>
                </Form>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell colSpan="2">상품 정보</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.Cell>
                <Form>
                  <Form.Field inline>
                    <label style={{ minWidth: "6em" }}>상품명</label>
                    <Input
                      id="product_name"
                      style={{ minWidth: "30em" }}
                      value={this.state.product_name}
                      onChange={this.handleValueChange}
                    />
                  </Form.Field>
                  <Form.Group inline>
                    <Form.Field>
                      <label style={{ minWidth: "6em" }}>상품가격</label>
                      <Input
                        id="product_price"
                        style={{ maxWidth: "15em" }}
                        value={this.state.product_price}
                        onChange={this.handleValueChange}
                      />
                    </Form.Field>
                    <Form.Field>
                      <label>원</label>
                    </Form.Field>
                  </Form.Group>
                  <Form.Group inline>
                    <Form.Field>
                      <label style={{ minWidth: "6em" }}>포장수량</label>
                      <Input
                        id="quantity"
                        style={{ maxWidth: "15em" }}
                        value={this.state.quantity}
                        onChange={this.handleValueChange}
                      />
                    </Form.Field>
                    <Form.Field>
                      <label>박스 (BOX)</label>
                    </Form.Field>
                  </Form.Group>
                  <Form.Field inline>
                    <label style={{ minWidth: "6em" }}>부피</label>
                    <Dropdown
                      style={{ minWidth: "5em" }}
                      selection
                      id="volume"
                      options={gdsVol}
                      onChange={this.dropChange}
                    />
                  </Form.Field>
                  <Form.Field inline>
                    <label style={{ minWidth: "6em" }}>특이사항 기재</label>
                    <Input
                      id="others"
                      style={{ minWidth: "30em" }}
                      value={this.state.others}
                      onChange={this.handleValueChange}
                    />
                  </Form.Field>
                </Form>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <Form>
                  <Form.Field inline>
                    <label style={{ minWidth: "6em" }}>비밀번호</label>
                    <Input
                      id="password"
                      type="password"
                      style={{ minWidth: "30em" }}
                      value={this.state.password}
                      onChange={this.handleValueChange}
                    />
                  </Form.Field>
                </Form>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Button onClick={this.handleFormSubmit} attached="bottom"
                loading={this.state.loading}
                type="submit"
                basic
                color="violet">
                접수
              </Button>

              <Button onClick={this.getmail} attached="bottom">
                꺼내기
              </Button>
              <Message
                error
                header="Oops!"
                content={this.state.errorMessage}
              />
            </Table.Row>
          </Table.Body>
        </Table>
      </Layout>
    );
  }
}

export default App;
