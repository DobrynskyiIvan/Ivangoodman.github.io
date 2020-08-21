import React from "react";
import FilmsForm from "../forms/FilmsForm"
import {Route, Redirect} from 'react-router-dom'
import { find} from 'lodash';

export default function AdminRoute( { status,state,submit }) {
  return    status === "admin"? (
            <>
                <Route
                    path="/films/new"
                    render={() => (
                        <div className="six wide column">
                            <FilmsForm submit={submit} film={{}} />
                        </div>
                    )}
                />

                <Route
                    path="/films/edit/:_id"
                    render={props => (
                        <div className="six wide column">
                            <FilmsForm
                                submit={submit}
                                film={  find(state.films, { _id: props.match.params._id,}) || {} }
                            />
                        </div>
                    )}
                />
            </>
        ) : (
            <Route path="/films/*" render={() => <Redirect to="/films" />}/>
        )}
 
 
