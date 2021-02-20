import React from 'react'

export default function Modal() {
    return (
    
        <div className="modal fade" id="search_bar" role="dialog">
        <div className="modal-dialog">
          {/* <!-- Modal content--> */}
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal"><i className="fa fa-close"></i></button>
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col-lg-8 col-md-8 col-sm-8 offset-lg-2 offset-md-2 offset-sm-2 col-xs-10 col-xs-offset-1">
                  <div className="navbar-search">
                    <form action="#" method="get" id="search-global-form" className="search-global">
                      <input type="text" placeholder="Type to search" autocomplete="off" name="s" id="search" value="" className="search-global__input"/>
                      <button className="search-global__btn"><i className="fa fa-search"></i></button>
                      <div className="search-global__note">Begin typing your search above and press return to search.</div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        )
}
