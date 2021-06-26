import React, { Component } from "react";

import firebase from "../../firebase/firebase";

import {
  Grid,
  Header,
  Icon,
  Dropdown,
  Image,
  Modal,
  Input,
  Button,
  Form,
} from "semantic-ui-react";
import AvatarEditor from "react-avatar-editor";
import { Multiselect } from "multiselect-react-dropdown";
import "../../static/style/pages/academics.css";
//
var ref = firebase.database().ref("academics");
//ref.push({'firstname':'manoj','lastname':'ks'})
//printing
ref.on(
  "value",
  function (snapshot) {
    console.log(snapshot.val());
  },
  function (error) {
    console.log("Error: " + error.code);
  }
);
//printing
//
const options = [
  { name: "Code", id: 1 },
  { name: "Reading Books", id: 2 },
  { name: "Science", id: 3 },
  { name: "Web Series", id: 4 },
  { name: "Theatre", id: 4 },
];

export default class App extends Component {
  state = {
    startingYear: "",
    endingYear: "",
    course: "",
    aboutYourself: "",
    modal: false,
    previewImage: "",
    croppedImage: "",
    metadata: {
      contentType: "image/jpeg",
    },
    uploadCroppedImage: "",
    blob: "",
    selectedItem: [],
  };

  openModal = () => this.setState({ modal: true });
  closeModal = () => this.setState({ modal: false });

  uploadCroppedImage = () => {
    // upload the image to firebase
  };

  changeAvatar = () => {
    // change profile picture in the firebase and update the url of the image in firebase
  };

  handleCropImage = () => {
    if (this.avatarEditor) {
      this.avatarEditor.getImageScaledToCanvas().toBlob((blob) => {
        let imageUrl = URL.createObjectURL(blob);
        this.setState({
          croppedImage: imageUrl,
          blob,
        });
      });
    }
  };

  handleCropImage = () => {
    if (this.avatarEditor) {
      this.avatarEditor.getImageScaledToCanvas().toBlob((blob) => {
        let imageUrl = URL.createObjectURL(blob);
        this.setState({
          croppedImage: imageUrl,
          blob,
        });
      });
    }
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleFileInput = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    if (file) {
      reader.readAsDataURL(file);
      reader.addEventListener("load", () => {
        this.setState({ previewImage: reader.result });
      });
    }
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const academicDetails = {
      user: this.props.currentUser.uid,
      startingYear: this.state.startingYear,
      endingYear: this.state.endingYear,
      course: this.state.course,
      about: this.state.about,
    };

    console.log(academicDetails);
    firebase
      .database()
      .ref(`academics/${this.props.currentUser.uid}`)
      .set(academicDetails);
    this.setState({});
  };

  onSelect = (selectedItem) => {
    this.setState({ selectedItem });
    console.log(this.state.selectedItem);
  };

  onRemove = (removedItem) => {};

  render() {
    const {
      course,
      endingYear,
      startingYear,
      modal,
      previewImage,
      croppedImage,
      selectedItem,
    } = this.state;

    return (
      <React.Fragment>
        <div className="academicDetails ">
          <div className="academicMain effect-box">
            <div className="container">
              <div className="card">
                <div className="content">
                  {/*cover picture division*/}
                  <div
                    className="upper-div"
                    style={{
                      width: "90%",
                      height: "100%",
                      position: "center",
                      paddingLeft: "5%",
                      paddingTop: "5%",
                    }}
                  >
                    {/* provide photo url from the firebase in back ground picture */}
                    <div
                      className="cover"
                      style={{ width: "100%", height: "20%" }}
                    >
                      <Image
                        className=""
                        width={"98%"}
                        src={
                          "https://i.pinimg.com/originals/1c/56/74/1c5674df8896d8c173d8aaf59f5aeecb.jpg"
                        }
                        style={{ marginLeft: "auto", marginRight: "auto" }}
                      />
                    </div>
                    <div className="position">
                      <Button
                        onClick={this.openModal}
                        style={{ marginLeft: "85%", width: "8%" }}
                      >
                        <Icon name="edit" style={{ margin: "auto" }} />
                      </Button>
                    </div>
                  </div>

                  {/* Interest and course details*/}
                  <div
                    className="detail-form"
                    style={{ width: "100%", height: "80%" }}
                  >
                    <div className="header-form">
                      <div className="icon-div">
                        <Image
                          src="https://wallpapercave.com/wp/wp3788126.jpg"
                          circular
                          spaced="center"
                          id="pic"
                          size="small"
                        />
                        <Button onClick={this.openModal}>
                          <Icon name="edit" />
                        </Button>
                      </div>
                      <div className="header-name">
                        <h2 className="color-white ">
                          Choose Your Profile Photo and Cover Picture
                        </h2>
                      </div>
                    </div>

                    <Form onSubmit={this.handleSubmit}>
                      <h2 className>Interests*</h2>
                      <h6 className="color-white ">
                        Please select at least 3 intrests like
                        Arts,Basketball,Entrepreneurship,Painting etc.
                      </h6>
                      <meta
                        name="description"
                        content="Please select atleast 3 interests"
                      ></meta>
                      <Multiselect
                        options={options} // Options to display in the dropdown
                        selectedValues={selectedItem} // Preselected value to persist in dropdown
                        onSelect={this.onSelect} // Function will trigger on select event
                        onRemove={this.onRemove} // Function will trigger on remove event
                        displayValue="interest" // Property name to display in the dropdown options
                      />

                      <h2>Course*</h2>
                      <Form.Input
                        className="course px-2"
                        name="course"
                        placeholder="Example B.Tech Electronics and Communication"
                        onChange={this.handleChange}
                        maxLength={40}
                        size={40}
                        value={course}
                        required
                      />

                      <h2>Starting Year*</h2>
                      <Form.Input
                        className="startingYear px-2"
                        name="startingYear"
                        placeholder="Example : 2018"
                        maxLength={4}
                        value={startingYear}
                        onChange={this.handleChange}
                        type="text"
                        pattern="[0-9]*"
                        required
                      />

                      <h2>Ending Year*</h2>

                      <Form.Input
                        className="endingYear px-2"
                        name="endingYear"
                        placeholder="Example : 2022"
                        maxLength={4}
                        onChange={this.handleChange}
                        value={endingYear}
                        type="text"
                        pattern="[0-9]*"
                        required
                      />

                      <h2>About Yourself</h2>
                      <textarea
                        className="about "
                        name="about"
                        value={this.aboutYourself}
                        onChange={this.handleChange}
                        maxLength={1000}
                        type="text"
                        rows="6"
                      />

                      <div className="form-group btn-pos">
                        <button type="submit" className="login-btn">
                          SUBMIT
                        </button>
                      </div>
                    </Form>

                    <Modal basic open={modal} onClose={this.closeModal}>
                      <Modal.Header>Select Image</Modal.Header>
                      <Modal.Content>
                        {/* Preview image so user can crop it */}
                        <Input
                          onChange={this.handleFileInput}
                          fluid
                          type="file"
                          label="New Avatar"
                          name="previewImage"
                        />

                        <Grid centered stackable columns={2}>
                          <Grid.Row centered>
                            <Grid.Column className="ui centered aligned grid">
                              {/* Image Preview */}
                              {previewImage && (
                                <AvatarEditor
                                  ref={(node) => (this.avatarEditor = node)}
                                  image={previewImage}
                                  width={120}
                                  height={120}
                                  border={50}
                                  scale={1.2}
                                />
                              )}
                            </Grid.Column>
                            <Grid.Column>
                              {/* Crop image preview */}
                              {croppedImage && (
                                <Image
                                  style={{ margin: "3.5em auto" }}
                                  width={100}
                                  height={100}
                                  src={croppedImage}
                                />
                              )}
                            </Grid.Column>
                          </Grid.Row>
                        </Grid>
                      </Modal.Content>
                      <Modal.Actions>
                        {
                          <Button
                            color="green"
                            inverted
                            onClick={this.uploadCroppedImage}
                          >
                            <Icon name="save" /> Change Avatar
                          </Button>
                        }
                        <Button
                          color="green"
                          inverted
                          onClick={this.handleCropImage}
                        >
                          <Icon name="image" /> Preview
                        </Button>
                        <Button color="red" inverted onClick={this.closeModal}>
                          <Icon name="remove" /> Cancel
                        </Button>
                      </Modal.Actions>
                    </Modal>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
