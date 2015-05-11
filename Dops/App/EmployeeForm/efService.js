angularFormsApp.factory('efService',
    function () {
        return {
            employee: {
                fullName: "Milton Waddams",
                notes: "The ideal employee",
                deparment: "Administration",
                perkCar: true,
                perkStock: false,
                perkSixWheels: true,
                payrollType: "none"
            }
        }
    });