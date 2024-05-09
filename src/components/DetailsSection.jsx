import { useEffect, useState } from "react";

function DetailsSection({
  id,
  ISBN,
  title,
  price,
  author,
  publicationDate,
  submitForm,
}) {
  const [formID, setFormID] = useState(id);
  const [formISBN, setFormISBN] = useState(ISBN);
  const [formTitle, setFormTitle] = useState(title);
  const [formPrice, setFormPrice] = useState(price);
  const [formAuthor, setFormAuthor] = useState(author);
  const [formDatePublished, setFormDatePublished] = useState(publicationDate);

  function setValues() {
    setFormID(() => id);
    setFormISBN(() => ISBN);
    setFormTitle(() => title);
    setFormPrice(() => price);
    setFormAuthor(() => author);
    setFormDatePublished(() => publicationDate);
  }

  function resetForm() {
    setFormID("");
    setFormISBN("");
    setFormTitle("");
    setFormPrice("");
    setFormAuthor("");
    setFormDatePublished("");
  }

  useEffect(() => {
    setValues();
  }, [id]);

  return (
    <section
      className="content-details"
      onSubmit={(e) =>
        submitForm(
          e,
          {
            id: formID,
            ISBN: formISBN,
            title: formTitle,
            price: formPrice,
            author: formAuthor,
            publicationDate: new Date(formDatePublished),
          },
          resetForm
        )
      }
      id="details-section"
    >
      <div className="page">
        <h1 className="title">Form Section</h1>
        <div className="title-underline"></div>
        <form className="form">
          <h2 className="title">Details</h2>
          <div className="form-row">
            <label className="form-label" htmlFor="field1">
              title
            </label>
            <input
              type="text"
              id="field1"
              required
              className="form-input"
              value={formTitle}
              onChange={(e) => setFormTitle(e.target.value)}
            />
          </div>
          <div className="form-row">
            <label className="form-label" htmlFor="field2">
              author
            </label>
            <input
              type="text"
              id="field2"
              required
              className="form-input"
              value={formAuthor}
              onChange={(e) => setFormAuthor(e.target.value)}
            />
          </div>
          <div className="form-row">
            <label className="form-label" htmlFor="field3">
              ISBN
            </label>
            <input
              type="text"
              id="field3"
              required
              className="form-input"
              value={formISBN}
              placeholder={formISBN}
              onChange={(e) => setFormISBN(e.target.value)}
            />
          </div>
          <div className="form-row">
            <label className="form-label" htmlFor="field4">
              price
            </label>
            <input
              type="text"
              required
              id="field4"
              className="form-input"
              value={formPrice}
              onChange={(e) => setFormPrice(e.target.value)}
            />
          </div>
          <div className="form-row">
            <label className="form-label" htmlFor="field5">
              year published
            </label>
            <input
              type="text"
              id="field5"
              required
              className="form-input"
              value={formDatePublished}
              onChange={(e) => setFormDatePublished(e.target.value)}
            />
          </div>
          <button type="submit" className="btn" id="saveButton">
            submit
          </button>
          <button
            onClick={resetForm}
            type="reset"
            id="clearButton"
            className="btn"
          >
            Clear
          </button>
        </form>
      </div>
    </section>
  );
}
export default DetailsSection;
