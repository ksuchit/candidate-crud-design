import { useState } from "react";
import { Button, OverlayTrigger, Tooltip } from "react-bootstrap";
import { useForm } from "react-hook-form";

export default function Home() {
  const [state, setState] = useState({ gender: false, skills: [] });
  const [experience, setExperience] = useState([0, 1]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    //   reset();
  };
  console.log(state);

  const selectSkills = (e) => {
    console.log(e.target.value);
    console.log(state.skills.includes(e.target.value));
    if (state.skills.includes(e.target.value))
      setState({
        gender: state.gender,
        skills: state.skills.filter((prev) => prev !== e.target.value),
      });
    else
      setState({
        gender: state.gender,
        skills: [...state.skills, e.target.value],
      });
  };

  const onRemoveExperience = (index) => {
    console.log(index);
    if (experience.length > 2) {
      console.log("gret than 2");
      console.log(experience.filter((item, i) => i !== index));
      setExperience((prev) => prev.filter((item, i) => i !== index));
    } else alert("minimum 2 Experience fields required");
  };
  console.log(experience);
  return (
    <div className="container my-4">
      <main>
        <div className="py-5 text-center">
          <h2>Add Candidate</h2>
        </div>

        <div className="row g-5">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="col-md-7 col-lg-8 ms-auto me-auto">
              <h4 className="mb-3">Basic Info</h4>
              <div className="row g-3">
                <div className="col-sm-6">
                  <label className="form-label">First name</label>
                  <input
                    type="text"
                    className="form-control"
                    {...register("fName", { required: true })}
                  />
                  {errors.fName && (
                    <p style={{ color: "red" }}>Name is Required</p>
                  )}
                </div>

                <div className="col-sm-6">
                  <label className="form-label">Last name</label>
                  <input
                    type="text"
                    className="form-control"
                    {...register("lName", { required: true })}
                  />
                  {errors.lName && (
                    <p style={{ color: "red" }}>last name is Required</p>
                  )}
                </div>

                <div className="col-12">
                  <label className="form-label">Gender</label>
                  <div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        value="male"
                        {...register("gender")}
                      />
                      {/* onChange={()=>setState({gender:true,skills:state.skills})} */}
                      <label className="form-check-label">Male</label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        value="female"
                        {...register("gender")}
                      />
                      <label className="form-check-label">Female</label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        value="other"
                        {...register("gender")}
                      />
                      <label className="form-check-label">Other</label>
                    </div>
                  </div>
                  {errors.gender && <p style={{ color: "red" }}>Required</p>}
                </div>

                <div className="col-12">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="you@example.com"
                    {...register("email", { required: true })}
                  />
                  {errors.email && (
                    <p style={{ color: "red" }}>Email is Required</p>
                  )}
                </div>

                <div className="col-12">
                  <label className="form-label">Address</label>
                  <textarea
                    className="form-control"
                    placeholder="1234 Main St"
                    {...register("Address.local_address", { required: true })}
                  ></textarea>
                  {errors.Address?.local_address && (
                    <p style={{ color: "red" }}>Address is Required</p>
                  )}
                </div>

                <div className="col-md-5">
                  <label className="form-label">Country</label>
                  <select
                    className="form-select"
                    {...register("Address.country", { required: true })}
                  >
                    <option value="">Choose...</option>
                    <option>India</option>
                    <option>United States</option>
                  </select>
                  {errors.Address?.country && (
                    <p style={{ color: "red" }}>Country is Required</p>
                  )}
                </div>

                <div className="col-md-4">
                  <label className="form-label">State</label>
                  <select
                    className="form-select"
                    {...register("Address.state", { required: true })}
                  >
                    <option value="">Choose...</option>
                    <option>Maharashtra</option>
                    <option>Karnataka</option>
                  </select>
                  {errors.Address?.state && (
                    <p style={{ color: "red" }}>State is Required</p>
                  )}
                </div>

                <div className="col-md-3">
                  <label className="form-label">Pin / Zip</label>
                  <input
                    type="text"
                    className="form-control"
                    {...register("Address.pincode", { required: true })}
                  />
                  {errors.Address?.pincode && (
                    <p style={{ color: "red" }}>Pin is Required</p>
                  )}
                </div>
              </div>

              <hr className="my-4" />

              <h4 className="mb-3">Professional Info</h4>

              <div className="row g-3">
                <div className="col-12">
                  <label className="form-label">
                    Choose your skills
                    <span className="small text-muted">(min 3 skills)</span>
                  </label>
                  <div className="mb-3">
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value="Angular"
                        {...register("Skills")}
                        onChange={selectSkills}
                      />
                      <label className="form-check-label">Angular</label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value="React"
                        {...register("Skills")}
                        onChange={(e) => selectSkills(e)}
                      />
                      <label className="form-check-label">React</label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value="Node.js"
                        {...register("Skills")}
                        onChange={(e) => selectSkills(e)}
                      />
                      <label className="form-check-label">Node.JS</label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value="JavaScript"
                        {...register("Skills")}
                        onChange={(e) => selectSkills(e)}
                      />
                      <label className="form-check-label">JavaScript</label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value="Flutter"
                        {...register("Skills")}
                        onChange={(e) => selectSkills(e)}
                      />
                      <label className="form-check-label">Flutter</label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value="Java"
                        {...register("Skills")}
                        onChange={(e) => selectSkills(e)}
                      />
                      <label className="form-check-label">Java</label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row gy-3">
                <div className="col-12">
                  <label className="form-label">
                    <strong>
                      Experience
                      <span className="small text-muted">
                        (min 2, max 5 items)
                      </span>
                    </strong>
                  </label>
                  {experience.map((item, i) => {
                    return (
                      <div className="card mx-3 mt-3" key={i}>
                        <div className="card-body">
                          <h6 className="card-title text-muted mb-3">
                            Experience #{i + 1}
                            <button
                              type="button"
                              className="float-end text-danger fw-normal btn btn-danger btn-sm text-white"
                              onClick={() => onRemoveExperience(i)}
                            >
                              Remove
                            </button>
                          </h6>
                          <div className="row g-3">
                            <div className="col-6">
                              <label className="form-label">Company Name</label>
                              <input
                                type="text"
                                className="form-control"
                                {...register(`Experience.${i}.company_name`, {
                                  required: true,
                                })}
                              />
                              {errors.Experience?.i?.company_name && (
                                <p style={{ color: "red" }}>
                                  company_name is Required
                                </p>
                              )}
                            </div>
                            <div className="col-6">
                              <label className="form-label">
                                Duration{" "}
                                <span className="text-muted">(in months)</span>
                              </label>
                              <input
                                type="number"
                                className="form-control"
                                min={0}
                                {...register(`Experience.${i}.duration`, {
                                  required: true,
                                })}
                              />
                              {errors.Experience?.i?.duration && (
                                <p style={{ color: "red" }}>
                                  Duration is Required
                                </p>
                              )}
                            </div>
                            <div className="col-12">
                              <label className="form-label">
                                Describe your responsibilities
                              </label>
                              <textarea
                                className="form-control"
                                placeholder="describe here..."
                                {...register(`Experience.${i}.description`, {
                                  required: true,
                                })}
                              ></textarea>
                              {errors.Experience?.i?.description && (
                                <p style={{ color: "red" }}>name is Required</p>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}

                  <button
                    className="btn btn-secondary btn-sm"
                    type="button"
                    onClick={() => {
                      if (experience.length === 5)
                        alert(
                          "limit exceeds, not allowed to add more experience"
                        );
                      else setExperience((prev) => [...prev, (prev.length-1)+1]);
                    }}
                  >
                    Add more experience
                  </button>
                </div>
              </div>

              <hr className="my-4" />

              <OverlayTrigger
                placement="top"
                overlay={
                  <Tooltip id="button-tooltip-2">Remove item from cart</Tooltip>
                }
              >
                <Button variant="success" type="submit">
                  Save Candidate
                </Button>
              </OverlayTrigger>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
