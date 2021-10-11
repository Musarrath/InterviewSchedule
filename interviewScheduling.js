class InterviewScheduling {
    // setInterview function will be called from test class and companyPreference/studentPreference is passed.
    setInterview(companyPreference, studentPreference) {
        const result = {};

        const assignedCompanies = {}; 
        // company preference object assigned to create new company assigned object
        Object.assign(assignedCompanies, companyPreference);
        // for loop on companyPreference 
        for (const companyKey in companyPreference) {
            // checking companyKey equals to studentPreference's company key
            if (companyKey == studentPreference[companyPreference[companyKey]]) {
                // assigning company preference and student preference to result
                result[companyPreference[companyKey]] = studentPreference[companyPreference[companyKey]];
                //after assigning delete the studentPreference's company key value so cant be repeated.
                delete studentPreference[companyPreference[companyKey]];
                //delete the assigned companies value for not repeating
                delete assignedCompanies[companyKey];
            }
        }
        // assigning remaining student and company key's
        const leftStudents = Object.keys(studentPreference);
        const leftCompanies = Object.keys(assignedCompanies);
        // checking the length of the remaining leftCompanies and leftStudents 
        const iThLength = leftStudents.length >= leftCompanies.length ? leftCompanies.length : leftStudents.length;
        // iterating for the iThLength and assigning randomly.
        for (let i = 0; i < iThLength; i++) {
            result[leftStudents[i]] = leftCompanies[i];
        }

        console.log(result);
    }
}

module.exports = new InterviewScheduling();