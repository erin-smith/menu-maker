
import Jumbotron from "../components/Jumbotron";
import Card from "../components/Card";

function Home() {
 
    return (
        <div>
            <Jumbotron/>
            <Card/>
            {/* <SideBar>
            <form>
              <Input
                onChange={() => {}}
                name="title"
                placeholder="Title (required)"
              />
              <Input
                onChange={() => {}}
                name="author"
                placeholder="Author (required)"
              />
              <TextArea
                onChange={() => {}}
                name="synopsis"
                placeholder="Synopsis (Optional)"
              />
              <FormBtn
                disabled={!(formObject.author && formObject.title)}
                onClick={() => {}}
              >
                Submit Book
              </FormBtn>
            </form>
            </SideBar> */}
          </div>
    );
  }


export default Home;
