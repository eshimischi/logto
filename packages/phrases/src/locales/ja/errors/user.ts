const user = {
  username_already_in_use: 'このユーザー名はすでに使用されています。',
  email_already_in_use: 'このメールアドレスは既に別のアカウントに関連付けされています。',
  phone_already_in_use: 'この電話番号は既に別のアカウントに関連付けされています。',
  invalid_email: '無効なメールアドレスです。',
  invalid_phone: '無効な電話番号です。',
  email_not_exist: 'このメールアドレスは登録されていません。',
  phone_not_exist: 'この電話番号は登録されていません。',
  identity_not_exist: 'このソーシャルアカウントは登録されていません。',
  identity_already_in_use: 'このソーシャルアカウントはすでに別のアカウントに関連付けされています。',
  social_account_exists_in_profile: 'このソーシャルアカウントはすでに関連付けられています。',
  cannot_delete_self: '自分自身を削除することはできません。',
  sign_up_method_not_enabled: 'このサインアップ方法は有効化されていません。',
  sign_in_method_not_enabled: 'このサインイン方法は有効化されていません。',
  same_password: '新しいパスワードは、古いパスワードと同じであってはなりません。',
  password_required_in_profile: 'サインインする前にパスワードを設定する必要があります。',
  new_password_required_in_profile: '新しいパスワードを設定する必要があります。',
  password_exists_in_profile: 'すでにパスワードがプロフィールに存在しています。',
  username_required_in_profile: 'サインインする前にユーザー名を設定する必要があります。',
  username_exists_in_profile: 'すでにユーザー名がプロフィールに存在しています。',
  email_required_in_profile: 'サインインする前にメールアドレスを追加する必要があります。',
  email_exists_in_profile: 'すでにメールアドレスがプロフィールに関連付けられています。',
  phone_required_in_profile: 'サインインする前に電話番号を追加する必要があります。',
  phone_exists_in_profile: 'すでに電話番号がプロフィールに関連付けられています。',
  email_or_phone_required_in_profile:
    'サインインする前にメールアドレスまたは電話番号を追加する必要があります。',
  suspended: 'このアカウントは停止されています。',
  user_not_exist: '{{ identifier }}を持つユーザーは存在しません。',
  missing_profile: 'サインインする前に追加情報を提供する必要があります。',
  role_exists: 'このユーザーには既に役割ID {{roleId}}が追加されています。',
  invalid_role_type:
    '役割タイプが無効です。ユーザーにはマシン対マシンの役割を割り当てることはできません。',
  missing_mfa: 'MFAを追加してからサインインしてください。',
  totp_already_in_use: 'TOTPはすでに使用されています。',
  backup_code_already_in_use: 'バックアップコードはすでに使用されています。',
  password_algorithm_required: 'Password algorithm is required.',
  password_and_digest: 'You cannot set both plain text password and password digest.',
  personal_access_token_name_exists: '個人用アクセス トークン名は既に存在します。',
  totp_secret_invalid: '無効な TOTP シークレットが提供されました。',
  wrong_backup_code_format: 'バックアップコードの形式が無効です。',
  username_required: 'ユーザー名は必須の識別子ですので、null に設定することはできません。',
  email_or_phone_required:
    'メールアドレスまたは電話番号は必須の識別子であり、少なくとも1つが必要です。',
  email_required: 'メールアドレスは必須の識別子ですので、null に設定することはできません。',
  phone_required: '電話番号は必須の識別子ですので、null に設定することはできません。',
  enterprise_sso_identity_not_exists:
    'ユーザーは、指定された SSO コネクタ ID: {{ ssoConnectorId }} にリンクされたエンタープライズ ID を持っていません。',
  /** UNTRANSLATED */
  identity_not_exists_in_current_user:
    'The specified identity does not exist in the current user account. Please link the identity before proceeding.',
};

export default Object.freeze(user);
