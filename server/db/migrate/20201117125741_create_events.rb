class CreateEvents < ActiveRecord::Migration[6.0]
  def change
    create_table :events do |t|
      t.string :title
      t.string :description
      t.string :tagline
      t.integer :duration
      t.datetime :start_time
      t.string :address
      t.string :city
      t.string :zip_code
      t.string :max_attendees

      t.timestamps
    end
  end
end
