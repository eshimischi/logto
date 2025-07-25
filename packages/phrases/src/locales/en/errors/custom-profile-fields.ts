const custom_profile_fields = {
  entity_not_exists_with_names: 'Cannot find entities with the given names: {{names}}',
  invalid_min_max_input: 'Invalid min and max input.',
  invalid_options: 'Invalid field options.',
  invalid_regex_format: 'Invalid regex format.',
  invalid_address_parts: 'Invalid address parts.',
  invalid_fullname_parts: 'Invalid fullname parts.',
  name_exists: 'Field already exists with the given name.',
  conflicted_sie_order: 'Conflicted field order value for Sign-in Experience.',
  invalid_name: 'Invalid field name, only letters or numbers are allowed, case sensitive.',
  name_conflict_sign_in_identifier:
    'Invalid field name. "{{name}}" is a reserved sign-in identifier key.',
  name_conflict_custom_data: 'Invalid field name. "{{name}}" is a reserved custom data key.',
  name_required: 'Field name is required.',
};

export default Object.freeze(custom_profile_fields);
