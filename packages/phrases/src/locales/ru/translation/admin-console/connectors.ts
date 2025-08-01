const connectors = {
  page_title: 'Коннекторы',
  title: 'Коннекторы',
  subtitle: 'Настройте коннекторы, чтобы включить опыт без пароля и социального входа в систему',
  create: 'Добавить социальный коннектор',
  config_sie_notice: 'Вы настроили коннекторы. Убедитесь, что вы настроили их в <a>{{link}}</a>.',
  config_sie_link_text: 'опыте входа в систему',
  tab_email_sms: 'Коннекторы электронной почты и SMS',
  tab_social: 'Социальные коннекторы',
  connector_name: 'Имя коннектора',
  demo_tip:
    'Максимальное количество сообщений для этого демонстрационного коннектора ограничено 100 и не рекомендуется для развертывания в производственной среде.',
  social_demo_tip:
    'Демонстрационный коннектор предназначен исключительно для демонстрационных целей и не рекомендуется для развертывания в производственной среде.',
  connector_type: 'Тип',
  connector_status: 'Опыт входа в систему',
  connector_status_in_use: 'Используется',
  connector_status_not_in_use: 'Не используется',
  not_in_use_tip: {
    content:
      'Не используется означает, что ваш опыт входа в систему не использовал этот метод входа. <a>{{link}}</a>, чтобы добавить этот метод входа.',
    go_to_sie: 'Перейти к опыту входа в систему',
  },
  placeholder_title: 'Социальный коннектор',
  placeholder_description:
    'Logto предоставляет множество широко используемых коннекторов для входа через социальные сети, в то время как вы можете создать свой с помощью стандартных протоколов.',
  save_and_done: 'Сохранить и завершить',
  type: {
    email: 'Коннектор электронной почты',
    sms: 'Коннектор SMS',
    social: 'Социальный коннектор',
  },
  setup_title: {
    email: 'Настройка коннектора электронной почты',
    sms: 'Настройка коннектора SMS',
    social: 'Добавить социальный коннектор',
  },
  guide: {
    subtitle: 'Пошаговое руководство по настройке вашего коннектора',
    general_setting: 'Общие настройки',
    parameter_configuration: 'Конфигурация параметров',
    test_connection: 'Тестовое соединение',
    name: 'Имя для кнопки входа через социальные сети',
    name_placeholder: 'Введите имя для кнопки входа через социальные сети',
    name_tip:
      'Имя кнопки коннектора будет отображаться как "Продолжить с {{name}}". Будьте внимательны к длине названия, в случае, если оно станет слишком длинным.',
    connector_logo: 'Логотип коннектора',
    connector_logo_tip: 'Логотип будет отображаться на кнопке входа в коннектор.',
    target: 'Имя поставщика идентификации',
    target_placeholder: 'Введите имя поставщика идентификации коннектора',
    target_tip:
      'Значение «Название поставщика идентификации» может быть строкой уникального идентификатора, чтобы отличать ваших социальных пользователей.',
    target_tip_standard:
      'Значение «Название поставщика идентификации» может быть строкой уникального идентификатора, чтобы отличать ваших социальных пользователей. Эта настройка не может быть изменена после создания коннектора.',
    target_tooltip:
      '"Название поставщика идентификации" в социальных коннекторах Logto относится к "источнику" ваших социальных пользователей. В дизайне Logto мы не принимаем то же самое "название поставщика идентификации" для определенной платформы, чтобы избежать конфликтов. Вы должны быть очень внимательны, прежде чем добавлять коннектор, так как вы НЕ МОЖЕТЕ изменить его значение после создания. <a>Узнать больше</a>',
    target_conflict:
      'Введенное имя поставщика идентификации совпадает с существующим коннектором <span>name</span>. Использование того же имени поставщика идентификации может вызвать неожиданное поведение входа в систему, когда пользователи могут получить доступ к одной учетной записи через два разных коннектора.',
    target_conflict_line2:
      'Если вы хотите заменить текущий коннектор на тот же поставщик идентификации и разрешить предыдущим пользователям войти без регистрации заново, удалите коннектор <span>name</span> и создайте новый с тем же «Названием поставщика идентификации».',
    target_conflict_line3:
      'Если вы хотите подключиться к другому поставщику идентификации, измените «Название поставщика идентификации» и продолжайте.',
    config: 'Введите свой JSON-конфиг',
    sync_profile: 'Синхронизировать информацию профиля',
    sync_profile_only_at_sign_up: 'Синхронизировать только при регистрации',
    sync_profile_each_sign_in: 'Всегда синхронизировать при каждом входе',
    sync_profile_tip:
      'Синхронизируйте базовый профиль из социального провайдера, такой как имена пользователей и их аватары.',
    enable_token_storage: {
      title: 'Храните токены для постоянного доступа к API',
      description:
        'Храните токены доступа и обновления в Secret Vault. Позволяет автоматическим вызовам API без повторного согласия пользователя. Пример: позвольте вашему AI Agent добавлять события в Google Calendar с постоянной авторизацией. <a>Узнайте, как вызывать сторонние API</a>',
      tip: 'Советы: Для стандартного поставщика идентификации OAuth/OIDC область `offline_access` должна быть включена для получения токена обновления, предотвращая повторные запросы согласия пользователя.',
    },
    callback_uri: 'URI обратного вызова',
    callback_uri_description:
      'Также называется URI перенаправления, это URI в Logto, на который пользователи будут отправлены после социальной авторизации. Скопируйте и вставьте его на странице настройки социального провайдера.',
    acs_url: 'URL сервиса подтверждения утверждений',
  },
  platform: {
    universal: 'Универсальная',
    web: 'Web',
    native: 'Мобильное приложение',
  },
  add_multi_platform: 'поддерживает несколько платформ, выберите платформу для продолжения',
  drawer_title: 'Руководство Коннектора',
  drawer_subtitle: 'Следуйте инструкциям, чтобы интегрировать свой коннектор',
  unknown: 'Неизвестный коннектор',
  standard_connectors: 'стандартные разъемы',
  create_form: {
    third_party_connectors:
      'Интегрируйте сторонних поставщиков для быстрого социального входа, связывания социальных учетных записей и доступа к API. <a>Узнать больше</a>',
    standard_connectors:
      'Или вы можете настроить свой социальный коннектор с помощью стандартного протокола.',
  },
};

export default Object.freeze(connectors);
