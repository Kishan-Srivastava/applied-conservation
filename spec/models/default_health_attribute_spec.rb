require 'rails_helper'

describe DefaultHealthAttribute, type: :model do
  it { should belong_to(:target_type) }
end
