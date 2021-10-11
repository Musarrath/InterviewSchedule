const InterviewScheduling = require("./interviewScheduling");

class TestSchedule {

    // calling the scenario one 
    scenarioOne() {
        const companyPreference = {
            c1: "s1",
            c2: "s2"
        };
        const studentPreference = {
            s1: "c1",
            s2: "c2"
        };
        InterviewScheduling.setInterview(companyPreference, studentPreference);
    }

    // calling the scenario two
    scenarioTwo() {
        const companyPreference = {
            c1: "s1",
            c2: "s2"
        };
        const studentPreference = {
            s1: "c1",
            s2: "c1"
        };
        InterviewScheduling.setInterview(companyPreference, studentPreference);
    }

    // calling the scenario three
    scenarioThree() {
        const companyPreference = {
            c1: "s1",
            c2: "s2"
        };
        const studentPreference = {
            s1: "c2",
            s2: "c1"
        };
        InterviewScheduling.setInterview(companyPreference, studentPreference);
    }
}

module.exports = new TestSchedule();