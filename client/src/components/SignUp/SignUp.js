import MobileDetect from "mobile-detect";
import React, { Component } from "react";
import {
  Container,
  Message,
  Responsive,
  Input,
  Form,
  Button,
  Table,
  Dropdown,
  Segment
} from "semantic-ui-react";
import './SignUp.css'

const DesktopContainer = ({ children, getWidth }) => (
  <Responsive
    fireOnMount
    getWidth={getWidth}
    minWidth={Responsive.onlyTablet.minWidth}
  >
    <Table singleLine>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell colSpan="2">회원가입</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.Cell>
            <Form>
              <Form.Field inline>
                <label style={{ minWidth: "6em" }}>아이디</label>
                <Input
                  icon="user"
                  iconPosition="left"
                  style={{ minWidth: "30em" }}
                />
              </Form.Field>
              <Form.Field inline>
                <label style={{ minWidth: "6em" }}>비밀번호</label>
                <Input
                  icon="lock"
                  iconPosition="left"
                  type="password"
                  style={{ minWidth: "30em" }}
                />
              </Form.Field>
              <Form.Field inline>
                <label style={{ minWidth: "6em" }}>이름</label>
                <Input style={{ minWidth: "30em" }} />
              </Form.Field>
              <Form.Group inline>
                <Form.Field>
                  <label style={{ minWidth: "6em" }}>연락처</label>
                  <Input style={{ maxWidth: "5em" }} />
                </Form.Field>
                <Form.Field>
                  <label>-</label>
                  <Input style={{ maxWidth: "5em" }} />
                </Form.Field>
                <Form.Field>
                  <label>-</label>
                  <Input style={{ maxWidth: "5em" }} />
                </Form.Field>
              </Form.Group>
              <Form.Field inline>
                <label style={{ minWidth: "6em" }}>이메일</label>
                <Input
                  icon="at"
                  iconPosition="left"
                  placeholder="Email"
                  style={{ minWidth: "30em" }}
                />
              </Form.Field>
              <Form.Field>
                <Button attached="bottom">접수 완료</Button>
              </Form.Field>
            </Form>
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
    {children}
  </Responsive>
);

const MobileContainer = ({ children, getWidth }) => (
  <Responsive
    fireOnMount
    getWidth={getWidth}
    maxWidth={Responsive.onlyMobile.maxWidth}
  >
    <Table singleLine>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell colSpan="2">회원가입</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.Cell>
            <Form>
              <Form.Field inline>
                <label style={{ minWidth: "4em" }}>아이디</label>
                <Input
                  icon="user"
                  iconPosition="left"
                  style={{ minWidth: "20em" }}
                />
              </Form.Field>
              <Form.Field inline>
                <label style={{ minWidth: "4em" }}>비밀번호</label>
                <Input
                  icon="lock"
                  iconPosition="left"
                  type="password"
                  style={{ minWidth: "20em" }}
                />
              </Form.Field>
              <Form.Field inline>
                <label style={{ minWidth: "4em" }}>이름</label>
                <Input style={{ minWidth: "20em" }} />
              </Form.Field>
              <Form.Group inline>
                <Form.Field>
                  <label style={{ minWidth: "4em" }}>연락처</label>
                  <Input style={{ maxWidth: "4em" }} />
                </Form.Field>
                <Form.Field>
                  <label>-</label>
                  <Input style={{ maxWidth: "5em" }} />
                </Form.Field>
                <Form.Field>
                  <label>-</label>
                  <Input style={{ maxWidth: "5em" }} />
                </Form.Field>
              </Form.Group>
              <Form.Field inline>
                <label style={{ minWidth: "4em" }}>이메일</label>
                <Input
                  icon="at"
                  iconPosition="left"
                  placeholder="Email"
                  style={{ minWidth: "20em" }}
                />
              </Form.Field>
              <Form.Field>
                <Button attached="bottom">접수 완료</Button>
              </Form.Field>
            </Form>
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>

    {children}
  </Responsive>
);

const ResponsiveContainer = ({ children, getWidth }) => (
  <React.Fragment>
    <DesktopContainer getWidth={getWidth}>{children}</DesktopContainer>
    <MobileContainer getWidth={getWidth}>{children}</MobileContainer>
  </React.Fragment>
);

const SignUp = ({ deviceInfo, isMobileFromSSR }) => (
  <React.Fragment>
    <Container>
      <ResponsiveContainer getWidth={getWidthFactory(isMobileFromSSR)} />
    </Container>
  </React.Fragment>
);

const getWidthFactory = isMobileFromSSR => () => {
  const isSSR = typeof window === "undefined";
  const ssrValue = isMobileFromSSR
    ? Responsive.onlyMobile.maxWidth
    : Responsive.onlyTablet.minWidth;

  return isSSR ? ssrValue : window.innerWidth;
};

SignUp.getInitialProps = async ({ req }) => {
  const md = new MobileDetect(req.headers["user-agent"]);
  const isMobileFromSSR = !!md.mobile();

  return {
    isMobileFromSSR,
    deviceInfo: {
      mobile: md.mobile(),
      tablet: md.tablet(),
      os: md.os(),
      userAgent: md.userAgent()
    }
  };
};

export default SignUp;
