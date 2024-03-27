https://colab.research.google.com/drive/1FgYu3we9PW1FdY42VJ6hZ9p-dESy0vmo?usp=sharing

exp5 --link

EXP--4 
https://colab.research.google.com/drive/19hYpGR4pAhFHaZ2jDa-JuZ6OKHFo05pU?usp=sharing




DOG VS CAT
#@title Run the code to unzip the dataset.zip file after uploding
import zipfile
import io
# Replace 'your_zip_file.zip' with the name of your uploaded zip file
with zipfile.ZipFile('dataset.zip', 'r') as zip_ref:
    zip_ref.extractall()



#@title Complete code
import tensorflow as tf
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Conv2D, MaxPooling2D, Flatten, Dense, BatchNormalization, Dropout
from tensorflow.keras.preprocessing.image import ImageDataGenerator
import matplotlib.pyplot as plt

# Constants
TRAIN_DIR = "dataset/train"
TEST_DIR = "dataset/test"
IMAGE_SIZE = (128, 128)
BATCH_SIZE = 2
IMAGE_CHANNELS=3

# Create ImageDataGenerator
train_datagen = ImageDataGenerator(
    rescale=1./255,
    rotation_range=40,
    width_shift_range=0.2,
    height_shift_range=0.2,
    shear_range=0.2,
    zoom_range=0.2,
    horizontal_flip=True
)

test_datagen = ImageDataGenerator(
    rescale=1./255,
    rotation_range=40,
    width_shift_range=0.2,
    height_shift_range=0.2,
    shear_range=0.2,
    zoom_range=0.2,
    horizontal_flip=True
)

train_generator = train_datagen.flow_from_directory(
    TRAIN_DIR,
    target_size=IMAGE_SIZE,
    batch_size=BATCH_SIZE,
    class_mode='binary'
)

test_generator = test_datagen.flow_from_directory(
    TEST_DIR,
    target_size=IMAGE_SIZE,
    batch_size=BATCH_SIZE,
    class_mode='binary'
)

model = Sequential([
    Conv2D(32, (3, 3), activation='relu', input_shape=(128, 128, IMAGE_CHANNELS)),
    BatchNormalization(),
    MaxPooling2D(pool_size=(2, 2)),
    #Dropout(0.25),

    Conv2D(64, (3, 3), activation='relu'),
    BatchNormalization(),
    MaxPooling2D(pool_size=(2, 2)),
    #Dropout(0.25),

    Conv2D(128, (3, 3), activation='relu'),
    BatchNormalization(),
    MaxPooling2D(pool_size=(2, 2)),
    #Dropout(0.25),

    Flatten(),
    Dense(512, activation='relu'),
    BatchNormalization(),
    Dropout(0.5),
    Dense(1, activation='sigmoid'), # 2 because we have cat and dog classes
])

model.compile(loss='binary_crossentropy', optimizer='adam', metrics=['accuracy'])

model.summary()

# Train the model
history = model.fit(train_generator, steps_per_epoch=5, epochs=11, validation_data=test_generator, validation_steps=2)

# Retrieve training and validation accuracy
train_accuracy = history.history['accuracy']
val_accuracy = history.history['val_accuracy']

# Plot training and validation accuracy
plt.plot(train_accuracy, label='Train Accuracy')
plt.plot(val_accuracy, label='Validation Accuracy')
plt.xlabel('Epoch')
plt.ylabel('Accuracy')
plt.legend(loc='lower right')
plt.show()

# Evaluate the model on the test set
test_loss, test_accuracy = model.evaluate(test_generator)

print("Test Accuracy:", test_accuracy)
print("Test Loss:", test_loss)












EXP-6
 import keras
 from keras.datasets import mnist
 from keras.models import Sequential
 from keras.layers import Dense, Flatten, Conv2D, AveragePooling2D
 import matplotlib.pyplot as plt
 # Load and preprocess MNIST dataset
 (x_train, y_train), (x_test, y_test) = mnist.load_data()
 x_train, x_test = x_train / 255.0, x_test / 255.0
 x_train = x_train.reshape(-1, 28, 28, 1)
 x_test = x_test.reshape(-1, 28, 28, 1)
 y_train = keras.utils.to_categorical(y_train, 10)
 y_test = keras.utils.to_categorical(y_test, 10)
 # Define LeNet-5 architecture
 model = Sequential([
    Conv2D(6, kernel_size=(5, 5), activation='tanh', input_shape=(28, 28, 1)),
    AveragePooling2D(pool_size=(2, 2), strides=(2, 2)),
    Conv2D(16, kernel_size=(5, 5), activation='tanh'),
    AveragePooling2D(pool_size=(2, 2), strides=(2, 2)),
    Flatten(),
    Dense(120, activation='tanh'),
    Dense(84, activation='tanh'),
    Dense(10, activation='softmax')
 ])
 # Compile model
 model.compile(loss='categorical_crossentropy',
              optimizer='adam',
              metrics=['accuracy'])
 # Train model
 history = model.fit(x_train, y_train,
                    batch_size=128, epochs=12,
                    validation_data=(x_test, y_test))
 # Evaluate model
 score = model.evaluate(x_test, y_test, verbose=0)
 print(f'Test loss score: {score[0]}')
 print(f'Test accuracy score:{ score[1]}')
 # Plot training & validation accuracy values
 plt.plot(history.history['accuracy'])
 plt.plot(history.history['val_accuracy'])
 plt.title('Model accuracy')
 plt.ylabel('Accuracy')
 plt.xlabel('Epoch')
 plt.legend(['Train', 'Test'], loc='upper left')
 plt.show()
 # Plot training & validation loss values
 plt.plot(history.history['loss'])
 plt.plot(history.history['val_loss'])
 plt.title('Model loss')
 plt.ylabel('Loss')
 plt.xlabel('Epoch')
 plt.legend(['Train', 'Test'], loc='upper left')
 plt.show() 
