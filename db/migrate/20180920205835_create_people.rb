class CreatePeople < ActiveRecord::Migration[5.2]
  def change
    create_table :people do |t|
      t.string :name
      t.string :location
      t.string :email
      t.string :avatar

      t.timestamps
    end
  end
end
