import os

def create_folder_structure(project_path):
    # Define the folder structure
    folder_structure = {
        'src': [
            'index.html',
            'assets',
            'scripts',
            'typings'
        ],
        'scripts': [
            'main.ts',
            'upload.ts',
            'googleMaps.ts',
            'routeSimulation.ts'
        ]
    }

    try:
        # Create the main project folder
        os.makedirs(project_path)

        # Create the subfolders and files
        for folder, contents in folder_structure.items():
            folder_path = os.path.join(project_path, folder)
            os.makedirs(folder_path)
            for item in contents:
                item_path = os.path.join(folder_path, item)
                if not os.path.exists(item_path):
                    if '.' in item:
                        open(item_path, 'a').close()  # Create empty files
                    else:
                        os.makedirs(item_path)  # Create subfolders

        print(f"Folder structure successfully created in '{project_path}'.")
    except Exception as e:
        print(f"Error: {e}")
        if os.path.exists(project_path):
            # Remove partially created structure on error
            os.removedirs(project_path)

if __name__ == "__main__":
    project_path = "/Users/stevenmcsorley/concepts/lifecycle/app"
    create_folder_structure(project_path)
