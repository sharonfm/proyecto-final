import React, { Component } from 'react';
import { Card, CardBody, CardHeader, Pagination, PaginationItem, PaginationLink } from 'reactstrap';

class Paginations extends Component {

  render() {
    return (
      <div className="animated fadeIn">
        <Card>
          <CardHeader>
            <i className="fa fa-align-justify"></i><strong>Pagination</strong>
            <small> sizing</small>
          </CardHeader>
          <CardBody>
            <Pagination size="lg">
              <PaginationItem>
                <PaginationLink previous tag="button" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink tag="button">
                  1
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink tag="button">
                  2
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink tag="button">
                  3
                </PaginationLink>
              </PaginationItem>
              <PaginationItem className="d-none d-sm-block">
                <PaginationLink next tag="button" />
              </PaginationItem>
            </Pagination>
            <Pagination>
              <PaginationItem>
                <PaginationLink previous tag="button" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink tag="button">
                  1
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink tag="button">
                  2
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink tag="button">
                  3
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink next tag="button" />
              </PaginationItem>
            </Pagination>
            <Pagination size="sm">
              <PaginationItem>
                <PaginationLink previous tag="button" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink tag="button">
                  1
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink tag="button">
                  2
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink tag="button">
                  3
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink next tag="button" />
              </PaginationItem>
            </Pagination>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default Paginations;
