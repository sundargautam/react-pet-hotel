const ptBR = {
  common: {
    or: 'अथवा',
    cancel: 'रद्द गर्नुहोस',
    reset: 'रिसेट गर्नुहोस',
    save: 'सेब गर्नुहोस',
    search: 'खोजीगर्नुहोस',
    edit: 'सम्पादन गर्नुहोस',
    remove: 'हटाउनुहोस',
    new: 'नयाँ',
    export: 'निर्यात गर्नुहोस',
    noDataToExport: 'निर्यात गर्न डाटा छैन',
    import: 'आयात गर्नुहोस्',
    discard: 'खारेज गर्नुहोस',
    yes: 'ठिक छ',
    no: 'ठिक छैन',
    pause: 'पज गर्नुहोस',
    areYouSure: 'साच्चै हो ?',
    view: 'हेर्नुहोस',
    destroy: 'नष्ट गर्नुहोस',
    mustSelectARow: 'तपाईंले  row चयन गर्नुनैपर्दछ',
  },

  app: {
    title: 'पेट होटल',
  },

  entities: {
    pet: {
      name: 'pet',
      label: 'Pets',
      menu: 'Pets',
      exporterFileName: 'pet_export',
      list: {
        menu: 'Pets',
        title: 'Pets',
      },
      create: {
        success: 'घरपालुवा जनावर सफलतापूर्वक बचत गरियो',
      },
      update: {
        success: 'घरपालुवा जनावर सफलतापूर्वक अपडेट गरियो',
      },
      destroy: {
        success: 'घरपालुवा जनावर सफलतापूर्वक हटाईयो',
      },
      destroyAll: {
        success: 'पाल्तु जनावरहरू सफलतापूर्वक मेटाइयो',
      },
      edit: {
        title: 'पेटलाई सम्पादनगर्नुहोस',
      },
      fields: {
        id: 'Id',
        owner: 'मालिक',
        name: 'नाम',
        type: 'प्रकार',
        breed: 'जात',
        size: 'आकार',
        bookings: 'रिजर्व',
        createdAt: 'सिर्जना गरिएको',
        updatedAt: 'अपडेट गरिएको',
        createdAtRange: 'सिर्जना गरिएको',
      },
      enumerators: {
        type: {
          cat: 'बिरालो',
          dog: 'कुकुर',
        },
        size: {
          small: 'सानो',
          medium: 'मध्यम',
          large: 'ठुलो',
        },
      },
      new: {
        title: 'नयाँ Pet',
      },
      view: {
        title: 'Petको झलक',
      },
      importer: {
        title: 'घरपालुवा जनावरहरू आयात गर्नुहोस्',
        fileName: 'पाल्तु जनावर आयात टेम्पलेट',
        hint:
          'फाईलहरू / छवि स्तम्भहरू स्पेसद्वारा विभाजित गरिएको फाईलहरूको URL हुनुपर्दछ।',
      },
    },

    booking: {
      name: 'booking',
      label: 'रिजर्व',
      menu: 'रिजर्व',
      exporterFileName: 'booking_export',
      list: {
        menu: 'बुकिंग',
        title: 'बुकिंग',
      },
      create: {
        success: 'बुकिंग सफलतापूर्वक सुरक्षित गरियो',
      },
      update: {
        success: 'बुकिंग सफलतापूर्वक सुरक्षित गरियो',
      },
      destroy: {
        success: 'बुकिंग सफलतापूर्वक हटाइयो',
      },
      destroyAll: {
        success: 'बुकिंगहरु सफलतापूर्वक हटाइयो',
      },
      edit: {
        title: 'बुकिङ्ग सम्पादनगर्नुहोस',
      },
      fields: {
        id: 'आईडि',
        owner: 'मालिक',
        pet: 'पाल्तुजनावार',
        arrivalRange: 'आगमन ',
        arrival: 'आगमन',
        departureRange: 'प्रस्थान',
        departure: 'प्रस्थान',
        clientNotes: 'नोट्सहरु',
        employeeNotes: 'कर्मचारीको नोट्स',
        photos: 'फोटोहरु',
        status: 'स्थिति',
        cancellationNotes: 'टिप्पणीहरू रद्द गर्नुहोस',
        feeRange: 'कुल शुल्क',
        fee: 'कुल शुल्क',
        receipt: 'रसिद',
        createdAt: 'मा सिर्जना गरिएको',
        updatedAt: 'मा अपडेट गरिएको',
        createdAtRange: 'मा सिर्जना गरिएको',
        period: 'अवधि',
      },
      enumerators: {
        status: {
          booked: 'बुक भयो',
          progress: 'प्रगति हुदैछ',
          cancelled: 'रद्द गरियो',
          completed: 'पूरा भयो',
        },
      },
      new: {
        title: 'नयाँ बुकिंग',
      },
      view: {
        title: 'बुकिंग हेर्नुहोस्',
      },
      importer: {
        title: 'बुकिंग आयात गर्नुहोस्',
        fileName: 'booking_import_template',
        hint:
          'फाईलहरू / छवि स्तम्भहरू स्पेसद्वारा विभाजित गरिएको फाईलहरूको URL हुनुपर्दछ।',
      },
      validation: {
        periodPast: 'अवधि भविष्यमा हुनुपर्दछ',
        periodFull:
          'माफ गर्नुहोस्, पाल्तु जनावर होटल अहिले भरिएको छ',
      },
    },
  },

  auth: {
    profile: {
      title: 'प्रोफाइल सम्पादन गर्नुहोस',
      success: 'प्रोफाइल सफलतापूर्वक अपडेट गरियो',
    },
    createAnAccount: 'खाता खोल्नुहोस',
    rememberMe: 'खाता याद राख्नुहोस',
    forgotPassword: 'पार्वड विस्रिनुभयो',
    signin: 'साईन ईन गर्नुहोस',
    signup: 'दर्तागर्नुहोस',
    signout: 'साईन आउट गर्नुहोस',
    alreadyHaveAnAccount: 'पहिले खाता बनिसक्या छ?',
    signinWithAnotherAccount: 'अर्को खाताबाट साईन ईन गर्नुहोस',
    emailUnverified: {
      message: `Please confirm your email at <strong>{0}</strong> to continue..`,
      submit: `ईमेल प्रमाणीकरण पुन: पठाउनुहोस्`,
    },
    emptyPermissions: {
      message: `तपाईंसँग अहिले कुनै अनुमति छैन। तपाईंलाई सुविधाहरू प्रदान गर्न प्रशासकको लागि प्रतीक्षा गर्नुहोस्।.`,
    },
    passwordReset: {
      message: 'पासवर्ड रिसेट ईमेल पठाउनुहोस्',
      error: `ईमेल पहिचान भएन`,
    },
    emailAddressVerificationEmail: {
      error: `ईमेल पहिचान भएन`,
    },
    verificationEmailSuccess: `प्रमाणिकरण ईमेल सफलतापूर्वक पठाइयो`,
    passwordResetSuccess: `पासवर्ड रीसेट ईमेल सफलतापूर्वक पठाइयो`,
  },

  roles: {
    manager: {
      label: 'प्रबन्धक',
      description: 'सबै स्रोतहरूमा पूर्ण पहुँच',
    },
    employee: {
      label: 'कर्मचारी',
      description: 'कर्मचारी पहुँच',
    },
    petOwner: {
      label: 'घरपालुवा जनावरको मालिक',
      description: 'घरपालुवा जनावरको मालिकको पहुच',
    },
  },

  iam: {
    title: 'प्रयोगकर्ताहरू',
    menu: 'प्रयोगकर्ताहरू',
    disable: 'डिसेबल गर्नुहोस्',
    disabled: 'डिसेबल गर्नुहोस्',
    enabled: 'ईनेबल गरिएको',
    enable: 'ईनेबल गरिएको',
    doEnableSuccess: 'प्रयोगकर्ता सफलतापूर्वक ईनेबल गरियो',
    doDisableSuccess: 'प्रयोगकर्ता सफलतापूर्वक डिसेबल गरियो',
    doDisableAllSuccess:
      'प्रयोगकर्ताहरु सफलतापूर्वक डिसेबल गरियो',
    doEnableAllSuccess:
      'प्रयोगकर्ताहरु सफलतापूर्वक ईनेबल गरियो',
    doAddSuccess: 'प्रयोगकर्ताहरू सफलतापूर्वक बचत गरियो',
    doUpdateSuccess: 'प्रयोगकर्ता सफलतापूर्वक बचत गरियो',
    viewBy: 'द्वारा हेर्नुहोस्',
    users: {
      name: 'users',
      label: 'प्रयोगकर्ताहरू',
      exporterFileName: 'प्रयोगकर्ताहरुको आर्यात',
      doRemoveAllSelectedSuccess:
        'अनुमतिहरू सफलतापूर्वक हटाइयो',
    },
    roles: {
      label: 'भुमिकाहरु',
      doRemoveAllSelectedSuccess:
        'अनुमतिहरू सफलतापूर्वक हटाइयो',
    },
    edit: {
      title: 'प्रयोकर्ता सम्पादन गर्नुहोस',
    },
    new: {
      title: 'नयाँ प्रयोगकर्ता',
      emailsHint:
        'अल्पविराम चरित्र प्रयोग गरेर बहु ईमेल ठेगानाहरू अलग गर्नुहोस्',
    },
    view: {
      title: 'प्रयोगकर्ता हेर्नुहोस्',
      activity: 'गतिविधि',
    },
    importer: {
      title: 'प्रयोगकर्ताहरू आयात गर्नुहोस्',
      fileName: 'users_import_template',
      hint:
        'फाईलहरू / छवि स्तम्भहरू स्पेसद्वारा विभाजित गरिएको फाईलहरूको URL हुनुपर्दछ। सम्बन्ध अंतर स्थान द्वारा अलग संदर्भ रेकर्ड को आईडी हुनु पर्छ। भूमिकाहरू स्पेस द्वारा विभाजित भूमिका आईडी हुनुपर्दछ।',
    },
    errors: {
      userAlreadyExists: 'यस ईमेलको साथ प्रयोगकर्ता पहिले नै अवस्थित छ',
      userNotFound: 'प्रयोगकर्ता फेला परेन',
      disablingHimself: `तपाईं आफै डिसेबल गर्न सक्नुहुन्न`,
      revokingOwnPermission: `तपाईं आफ्नो प्रबन्धक अनुमति रद्द गर्न सक्नुहुन्न`,
    },
  },

  user: {
    fields: {
      id: 'Id',
      authenticationUid: 'प्रमाणीकरण Uid',
      avatars: 'अवतार',
      email: 'ईमेल',
      emails: 'ईमेलहरु',
      fullName: 'पुरानाम',
      firstName: 'नाम',
      lastName: 'थर',
      status: 'स्थिति',
      disabled: 'डिसेबल',
      phoneNumber: 'फोन नम्बर',
      role: 'भुमिका',
      createdAt: 'सिर्जना गरिएको',
      updatedAt: 'अपडेट गरिएको',
      roleUser: 'प्रयोग कर्ताको भुमिका',
      roles: 'भुमिक',
      createdAtRange: 'सिर्जना गरिएकको',
      password: 'पार्वर्ड',
      rememberMe: 'मलाई सम्झिनुहोस',
    },
    enabled: 'ईनेबल',
    disabled: 'डिसेबल',
    validations: {
      // eslint-disable-next-line
      email: 'यो ${value} ईमेल मान्य छैन',
    },
  },

  auditLog: {
    menu: 'अडिट लगहरू',
    title: 'अडिट लगहरू',
    exporterFileName: 'audit_log_export',
    entityNamesHint:
      'अल्पविराम क्यारेक्टर प्रयोग गरी बहु अस्तित्वहरू छुट्याउनुहोस्।',
    fields: {
      id: 'आईडि',
      timestampRange: 'अवधी',
      entityName: 'ईनटिटि',
      entityNames: 'ईन्टिटि',
      entityId: 'ईन्टिटिको आईडि',
      action: 'कार्य',
      values: 'मानहरू',
      timestamp: 'मिति',
      createdByEmail: 'प्रयोग कर्ताको ईमेल',
    },
  },
  settings: {
    title: 'सेटिंग्स',
    menu: 'सेटिंग्स',
    save: {
      success:
        'सेटिंग्स सफलतापूर्वक सुरक्षित गरियो। परिवर्तनहरू प्रभाव लिनको लागि पृष्ठ {0} सेकेन्डमा पुन: लोड हुनेछ.',
    },
    fields: {
      theme: 'थिम',
      dailyFee: 'दैनिक शुल्क',
      capacity: 'क्षमता',
    },
    colors: {
      default: 'डिफल्ट',
      cyan: 'Cyan',
      'geek-blue': 'Geek Blue',
      gold: 'सुन',
      lime: 'लाइम',
      magenta: 'म्याजेन्टा',
      orange: 'सुन्तला रङ्ग',
      'polar-green': 'Polar Green',
      purple: 'बैजनी',
      red: 'रातो',
      volcano: 'ज्वालामुखी',
      yellow: 'पहेंलो',
    },
  },
  home: {
    menu: 'गूह पूष्ट',
  },
  errors: {
    backToHome: 'गूह पूष्टमा जानुहोस',
    403: `माफ गर्नुहोस्, तपाईंसँग यस पृष्ठमा पहुँच छैन`,
    404: 'माफ गर्नुहोस्, तपाईंले भ्रमण गर्नुभएको पृष्ठ अवस्थित छैन',
    500: 'माफ गर्नुहोस्, सर्भरले त्रुटि रिपोर्ट गर्दैछ',
    forbidden: {
      message: 'निषेध गरिएको',
    },
    validation: {
      message: 'त्रुटि देखा पर्‍यो',
    },
    defaultErrorMessage: 'ला त्रुटि देखा पर्यो',
  },
  // See https://github.com/jquense/yup#using-a-custom-locale-dictionary
  /* eslint-disable */
  validation: {
    mixed: {
      default: '${path} मान्य छैन',
      required: '${path} मान्य छैन',
      oneOf:
        '${path}निम्न मानहरू मध्ये एक हुनुपर्दछ: ${values}',
      notOneOf:
        '${path} निम्न मानहरू मध्ये एक हुनुपर्दछ:: ${values}',
      notType: ({ path, type, value, originalValue }) => {
        return `${path} deve ser um ${type}`;
      },
    },
    string: {
      length: '${path} ठ्याक्कै ${length} यति क्यारेक्टको हुनुपर्छ',
      min:
        '${path} कम्तिमा ${min} यतिको क्यारेक्टरको हुनुपर्छ ',
      max:
        '${path} बढिमा ${max} यतिको हुनुपर्छ',
      matches:
        '${path} योसँग मेल खानै पर्छ "${regex}"',
      email: '${path} मान्य ईमेल हुनैपर्छ',
      url: '${path} मान्य URL हुनैपर्छ',
      trim:
        '${path} एक छाँटिएको  हुनुपर्दछ',
      lowercase: '${path} लोअरकेस हुनै पर्दछ',
      uppercase: '${path} अपरकेस हुनै पर्दछ',
      selected: '${path} छानिएको हुनै पर्दछ',
    },
    number: {
      min: '${path} यो  ${min} भन्दा ठूलो वा बराबर हुनै पर्छ',
      max: '${path} यो  ${max} भन्दा सानो वा बराबर हुनै पर्छ',
      lessThan: '${path} यो  ${less} भन्दा सानोनै हुनुपर्छ',
      moreThan: '${path} यो ${more} भन्दा ठुलोनै हुनुपर्छ',
      notEqual: '${path} यो ${notEqual} सँग बराबर हुनुभएन',
      positive: '${path} पोजेटिभ संख्या हुनुपर्दछ',
      negative: '${path} नेगेटिभ संख्या हुनुपर्दछ',
      integer: '${path} सङ्ख्या हुनैपर्दछ',
    },
    date: {
      min: '${path} field must be later than ${min}',
      max: '${path} field must be at earlier than  ${max}',
    },
    boolean: {},
    object: {
      noUnknown:
        '${path} field cannot have keys not specified in the object shape',
    },
    array: {
      min: '${path} field must have at least ${min} items',
      max: '${path} field must have less than or equal to ${max} items',
    },
  },
  /* eslint-disable */
  fileUploader: {
    upload: 'Upload',
    image: 'फोटो अपलोड गर्नुहोस',
    size:
      'फाईल धेरै ठूलो छ। अधिकतम अनुमति आकार यो {0} छ',
    formats: `अवैध ढाँचा। हुनै पर्छ '{0}'.`,
  },
  importer: {
    line: 'लाइन',
    status: 'स्थिति',
    pending: 'पेन्डिङ्ग',
    imported: 'आयात',
    error: 'त्रुति',
    total: `{0} यति आयात भयो, {1} यति पेन्डिङ्गमा छ  {2} बिना कुनै त्रुतिभईकन`,
    importedMessage: `Processed {0} of {1}.`,
    noNavigateAwayMessage:
      'यस पृष्ठबाट टाढा नेभिगेट नगर्नुहोस् वा आयात बन्द हुनेछ',
    completed: {
      success:
        'आयात सम्पन्न भयो। सबै row हरू सफलतापूर्वक आयात गरियो।',
      someErrors:
        'प्रशोधन सम्पन्न भयो, तर केहि rowsहरू आयात गर्न असक्षम भयो।.',
      allErrors:
        'आयात असफल भयो। कुनै मान्य rowsहरू छैनन्।',
    },
    form: {
      downloadTemplate: 'टेम्पलेट डाउनलोड गर्नुहोस्',
      hint:
        'जारी राख्नको लागि यस क्षेत्रमा फाईल क्लिक गर्नुहोस् वा तान्नुहोस्',
    },
    list: {
      discardConfirm:
        'साच्चै हो?  आयात नगरिएको डेटा हराउने छ।.',
    },
    errors: {
      invalidFileEmpty: 'फाईल खालीछ',
      invalidFileExcel:
        ' Excel (.xlsx) मात्र अनुमति छ',
      invalidFileUpload:
        'अमान्य फाइल। निश्चित गर्नुहोस् कि तपाईं टेम्प्लेटको अन्तिम संस्करण प्रयोग गर्दै हुनुहुन्छ।',
      importHashRequired: 'आयात ह्याश आवश्यक छ',
      importHashExistent: 'डाटा पहिले नै आयात गरिएको छ',
    },
  },

  autocomplete: {
    loading: 'लोड हुदैछ...',
  },

  imagesViewer: {
    noImage: 'फोटो छैन',
  },

  firebaseErrors: {
    'auth/user-disabled': 'तपाईको खाता डिसेबल पारिएको छ',
    'auth/user-not-found': `माफ गर्नुहोस्, हामी तपाईंको पत्यारपत्रहरू पहिचान गर्न सक्दैनौं`,
    'auth/wrong-password': `माफ गर्नुहोस्, हामी तपाईंको पत्यारपत्रहरू पहिचान गर्न सक्दैनौं`,
    'auth/weak-password': 'यो पार्सवोड निकै कमजोर छ',
    'auth/email-already-in-use':
      'यो ईमेल पहिल्यै प्रयोग गरिएको छ',
    'auth/invalid-email':
      'कृपया एक मान्य ईमेल प्रदान गर्नुहोस्',
    'auth/account-exists-with-different-credential':
      'ईमेल पहिले नै फरक प्रमाणीकरण विधिको लागि प्रयोगमा छ।',
    'auth/credential-already-in-use':
      'क्रेडेन्सियल पहिले नै प्रयोगमा छ',
  },
};

export default ptBR;
