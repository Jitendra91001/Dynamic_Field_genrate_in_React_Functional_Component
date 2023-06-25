import React from "react";

const Table = ({ alldata }) => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <table className="table table-striped" border="1">
              <thead>
                <tr>
                  {alldata.length != 0 &&
                    Object.keys(alldata[0]).map((item, index) => (
                      <th>{item}</th>
                    ))}
                </tr>
              </thead>
              <tbody>
                {alldata.length != 0 &&
                  alldata.map((item) => (
                    <tr>
                      {Object.values(item).map((item) => {
                        if (
                          typeof item == "string" &&
                          item.match(/jpg|jpeg|png|gif/)
                        ) {
                          return (
                            <td>
                              <img src={item} height="150px" width="150px" />
                            </td>
                          );
                        } else if (
                          typeof item === "string" &&
                          !Array.isArray(item)
                        ) {
                          return <td>{item}</td>;
                        } else if (Array.isArray(item)) {
                          if (
                            typeof item[0] == "string" &&
                            item[0].endsWith("jpg")
                          ) {
                            return item.map((value) => {
                              return (
                                <td>
                                  <img src={value} height="50px" width="50px" />
                                </td>
                              );
                            });
                          } else {
                            return item.map((data) => {
                              return Object.keys(data).map((item) => {
                                return <span>{data[item]}</span>;
                              });
                            });
                          }
                        } else if (typeof item != "object") {
                          return <td>{item}</td>;
                        } else {
                          if (typeof item == "object") {
                            return Object.keys(item).map((value) => {
                              if (typeof value[0] != "object") {
                                return <td>{value[item]}</td>;
                                // console.log(value)
                              } else if(typeof value[0][0]=='object') {
                                console.log(value)
                              }
                            });
                            // console.log(item)
                          }
                        }
                      })}
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};
export default Table;
