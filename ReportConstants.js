import moment from 'moment-timezone';

export const NEW_KEY = 'new';
export const NOT_FOUND = '-';

export const mapReportStatusToBackendCode = {
    pending: 1,
    declined: 2,
    accepted: 3,
    cancelledByCleaner: 5,
    started: 105,
    finished: 107,
};

export const mapReportJobTypeToBackendJobType = {
    turnover: 'Turnover',
    concierge: 'Concierge',
    maintenance: 'Maintenance',
    inspection: 'Inspection',
    other: 'Other',
};

export const mapDate = {
    thisweek: 'thisWeek',
    lastweek: 'lastWeek',
    thismonth: 'thisMonth',
    lastmonth: 'lastMonth',
    custom: 'custom',
};

export const FETCH_X_JOBREQUEST_PER_LOAD = 100;

export const COLUMN_WIDTHS = {
    propertyname: 300,
    slides: 100,
    actualstartdate: 150,
    actualenddate: 150,
    schedulestart: 150,
    scheduleend: 150,
    offeredpricecurrency: 250, // because of headline
    verificationphotos: 150,
    timedate: 150,
    msgfromserviceprovider: 210,
    actualtime: 150,
    actualstarttime: 150,
    actualendtime: 150,
    bedrooms: 100,
    bathrooms: 100,
    address: 300,
    jobsenddate: 150,
    accessinfo: 300,
    importantinfo: 300,
    propertytype: 150,
    tasks: 100,
    offeredprice: 150,
    msgtoserviceprovider: 300,
    canceledbyme: 150,
    problemsreported: 150,
    problemslist: 300,
    wifidescription: 300,
    parkinginfo: 300,
    viewed: 100,
    scheduletime: 150,
    scheduleduration: 150,
    garbageinfo: 300,
    description: 300,
    response: 117,
    job_title: 200,
    jobType: 200,
    totalCost: 100,
    bilableTime: 100,
    totalMilage: 100,
};

export const ORDER_COLUMNS = [
    'propertyname',
    'address',
    'city',
    'countrycode',
    'bedrooms',
    'bathrooms',
    'propertytype',
    'accessinfo',
    'garbageinfo',
    'parkinginfo',
    'wifiname',
    'wifipassword',
    'wifidescription',
    'importantinfo',
    'job_title',
    'jobType',
    'totalCost',
    'billableTime',
    'totalMileage',
    'jobsenddate',
    'schedulestart',
    'scheduleend',
    'scheduletime',
    'scheduleduration',
    'actualstartdate',
    'actualenddate',
    'actualtime',
    'actualstarttime',
    'actualendtime',
    'duration',
    'statusofrequest',
    'msgtoserviceprovider',
    'offeredprice',
    'offeredpricecurrency',
    'canceledbyme',
    'canceledbyserviceprovider',
    'name',
    'timedate',
    'viewed',
    'response',
    'msgfromserviceprovider',
    'slides',
    'tasks',
    'verificationphotos',
    'problemsreported',
    'problemslist',
    'title',
    'description',
];

export const DEFAULT_COLUMN_WIDTH = 200;
export const DEFAULT_PLACEHOLDER = '-';
export const CLICKABLE = {
    propertyname: true,
    jobsenddate: true,
    schedulestart: true,
    scheduleend: true,
    scheduletime: true,
};

export const DEFAULT_SECTIONS = {
    contacts: {
        selected: {},
        isAll: true,
        isOpen: false,
        isTouched: false,
    },
    properties: {
        selected: {},
        isAll: true,
        isOpen: false,
        isTouched: false,
    },
    date: {
        isOpen: false,
        active: undefined,
        mode: false,
        // Default to 'This month'
        start: moment()
            .startOf('month')
            .startOf('day'),
        end: moment()
            .endOf('month')
            .endOf('day'),
    },

    problems: {
        value: false,
        isOpen: false,
    },
    title: {
        value: '',
        showValidation: false,
    },
    collumns: {
        isOpen: false,
        isTouched: false,
        selected: {
            propertyname: true,
            bedrooms: true,
            bathrooms: true,
            jobsenddate: true,
            schedulestart: true,
            scheduleend: true,
            scheduletime: true,
            scheduleduration: true,
            actualstartdate: true,
            actualtime: true,
            actualstarttime: true,
            actualendtime: true,
            offeredprice: true,
            name: true,
            problemsreported: true,
            title: true,
            job_title: true,
            jobType: true,
        },
        selectedHeaders: {
            property: true,
            jobrequest: true,
            serviceprovider: true,
            checklist: true,
            progress: true,
        },
        states: {
            property: {
                children: {
                    propertyname: true,
                    address: true,
                    city: true,
                    countrycode: true,
                    bedrooms: true,
                    bathrooms: true,
                    propertytype: true,
                    accessinfo: true,
                    garbageinfo: true,
                    parkinginfo: true,
                    wifiname: true,
                    wifipassword: true,
                    wifidescription: true,
                    importantinfo: true,
                },
            },
            jobrequest: {
                children: {
                    job_title: true,
                    jobType: true,
                    totalCost: true,
                    billableTime: true,
                    totalMileage: true,
                    actualstartdate: true,
                    actualenddate: true,
                    actualtime: true,
                    actualstarttime: true,
                    actualendtime: true,
                    duration: true,
                    jobsenddate: true,
                    schedulestart: true,
                    scheduleend: true,
                    scheduletime: true,
                    scheduleduration: true,
                    msgtoserviceprovider: true,
                    statusofrequest: true,
                    canceledbyme: true,
                    canceledbyserviceprovider: true,
                    offeredprice: true,
                    offeredpricecurrency: true,
                },
            },
            serviceprovider: {
                children: {
                    name: true,
                    timedate: true,
                    viewed: true,
                    response: true,
                    msgfromserviceprovider: true,
                },
            },
            progress: {
                children: {
                    slides: true,
                    tasks: true,
                    verificationphotos: true,
                    problemsreported: true,
                    problemslist: true,
                },
            },
            checklist: {
                children: {
                    title: true,
                    description: true,
                },
            },
        },
    },
    status: {
        isTouched: false,
        isOpen: false,
        selected: {
            pending: true,
            accepted: true,
            declined: true,
            // cancelledByHost: true,
            cancelledByCleaner: true,
            // started: true,
            finished: true,
            delayed: true,
            started: true,
        },
        states: {
            pending: true,
            accepted: true,
            declined: true,
            // cancelledByHost: true,
            cancelledByCleaner: true,
            // started: true,
            finished: true,
            // delayed: true,
            // started: true,
        },
    },
    jobTypes: {
        isTouched: false,
        isOpen: false,
        selected: {
            turnover: true,
            concierge: true,
            maintenance: true,
            inspection: true,
            other: true,
        },
        types: {
            turnover: true,
            concierge: true,
            maintenance: true,
            inspection: true,
            other: true,
        },
    },
};
