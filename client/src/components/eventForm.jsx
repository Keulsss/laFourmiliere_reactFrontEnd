import React from 'react';
import Form from "./common/form";
import { getEvent } from "../services/eventService";
import { getCategories } from "../services/categoryService";

class FormEvent extends Form {
  state = {
    data:
    {
      title: "",
      description: "",
      tagline: "",
      start_time: "",
      max_attendes: 0,
      city: "",
      zip_code: "",
      duration: 0,
      address: ""
    },
    categories: [],
    event: {},
    errors: {}
  }

  async populateEvent() {
    try {
      const eventId = this.props.match.params.id;
      const { data: event } = await getEvent(eventId);
      this.setState({ event });
    } catch (ex) {
      if (ex.response && ex.response.status === 404)
        this.props.history.replace("/not-found")
    }
  }

  async populateCategories() {
    try {
      const { data: categories } = await getCategories();
      this.setState({ categories });
    } catch (ex) {
      if (ex.response && ex.response.status === 404)
        this.props.history.replace("/not-found")
    }
  }

  async componentDidMount() {
    await this.populateCategories()
  }

  doSubmit = () => {
  };

  render() {
    const { categories } = this.state;
    return (
      <div className="row">
        <aside className="col-md-4 bg-white pl-lg-5">
          <div className="col-12 col-lg-11 text-md-left" style={{
            marginTop: 150,
            marginBottom: 100
          }}>
            <h2 className="h1"><b>Creation</b> de votre événement.</h2>
            <p>Pour cela, nous allons passer en revue quelques informations de base</p>
          </div>
        </aside>
        <div className="col-md-8 bg-light">
          <div className="container">
            <div className="row justify-content-center" >
              <div className="col-md-11 col-lg-9" style={{
                marginTop: 100,
                marginBottom: 30
              }}>
                <form onSubmit={this.doSubmit}>
                  <div className="boxed p-2">
                    <h4><i className="icon-flag2 text-primary"></i>  Nom de votre événement</h4>
                    {this.renderInput("form-control form-control-minimal", "title", "", "text")}
                    <div className="col-7">
                      {this.renderInput("form-control form-control-sm form-control-minimal", "tagline", "", "text", "Ton événement en une phrase")}
                    </div>
                  </div>
                  <div className="boxed p-2 mt-3">
                    <h4><i className="icon-list-alt text-primary"></i>   Description de votre événement</h4>
                    {this.renderRichTextEditor("description")}
                  </div>
                  <div className="boxed p-2 mt-3">
                    <h4><i className="icon-calendar2 text-primary"></i>  Date et heure</h4>
                    {this.renderInput("form-control form-control-minimal", "start_time", "", "datetime")}
                  </div>
                  <div className="boxed p-2 mt-3">
                    <h4><i className="icon-map-pin2 text-primary"></i>  Lieu de votre événement</h4>
                    <p>Adresse</p>
                    <div className="row">
                      <div className="col-md-4">
                        {this.renderInput("form-control form-control-sm", "address", "", "text", "Adresse")}
                      </div>
                      <div className="col-md-4">
                        {this.renderInput("form-control form-control-sm", "city", "", "text", "Ville")}
                      </div>
                      <div className="col-md-4">
                        {this.renderInput("form-control form-control-sm", "zip_code", "", "text", "Code postal")}
                      </div>
                    </div>
                  </div>
                  <div className="boxed p-2 mt-3">
                    <h4><i className="icon-map-pin2 text-primary"></i>  Comment classeriez-vous cet événement ?</h4>
                    {this.renderSelect("form-control form-control-minimal", "category", categories)}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  };
};


export default FormEvent;
